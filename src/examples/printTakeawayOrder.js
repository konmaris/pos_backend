const escpos = require("escpos");
escpos.Network = require("escpos-network");

function printTakeawayOrder(order, client, cart, cartTotal, tip, discount, printerIp) {
  const device = new escpos.Network(printerIp);
  const printer = new escpos.Printer(device);

  device.open(function (error) {
    //prettier-ignore
    printer
  .encode("cp737")
  .setCharacterCodeTable(64)
  .font("a")

    printer
      .align("ct")
      .size(2, 1)
      .style("B")
      .text(order.mode)
      .newLine()

      .align("ct")
      .size(0, 0)
      .style("NORMAL")
      .text(`Ημερομηνία: ${order.date}`)

      .align("ct")
      .size(0, 0)
      .style("NORMAL")
      .text(`Ώρα:  ${order.time}`)

      .newLine()

      .align("ct")
      .size(2, 1)
      .style("B")
      .text(order.source)

      .align("ct")
      .size(2, 1)
      .style("B")
      .text(`#${order.daily_no}`)
      .newLine()

      .align("ct")
      .style("B")
      .size(1, 1)
      .text(order.paymentMethod)
      .newLine()

      .align("lt")
      .size(0, 1)
      .style("NORMAL")
      .text("Παραγγελία:")
      .feed(1)

      .size(0, 0);

    cart.forEach((item) => {
      printer.tableCustom([
        { text: `${item.quantity}x`, align: "LEFT", width: 0.1 },
        { text: item.name, align: "LEFT", width: 0.7, style: "B" },
        { text: `${(item.price * item.quantity).toFixed(2)}`, align: "RIGHT", width: 0.2 },
      ]);

      item.extras?.forEach((extra) => {
        printer.tableCustom([
          { text: "", width: 0.1 },
          { text: extra.optionLabel, align: "LEFT", width: 0.9 },
        ]);
      });

      printer.newLine();
    });

    printer.newLine();

    if (discount > 0) {
      printer
        .align("lt")

        .size(0, 1)
        .text(`Έκπτωση: ${discount.toFixed(2)}`);
    }

    // printer
    //   .align("lt")
    //   .size(0, 1)
    //   .pureText(`Σύνολο: `)
    //   .size(1, 1)
    //   .text(`${cartTotal.toFixed(2)}`);

    printer.size(0, 1);
    printer.tableCustom([
      { text: "Σύνολο:", width: 0.5, style: "B" },
      { text: `${cartTotal.toFixed(2)}`, align: "RIGHT", width: 0.5, style: "B" },
    ]);

    printer.feed(4).cut().close();
  });
}

module.exports = printTakeawayOrder;
