const escpos = require("escpos");
escpos.Network = require("escpos-network");

function printOrder(order, client, cart, cartTotal, tip, discount, printerIp) {
  const device = new escpos.Network(printerIp);
  const printer = new escpos.Printer(device);

  // const order = {
  //   mode: "DELIVERY",
  //   date: "13/07/2024",
  //   time: "14:47",
  //   source: "WOLT",
  //   daily_no: "001",
  //   paymentMethod: "ΠΡΟΠΛΗΡΩΜΕΝΗ",
  // };

  // const client = {
  //   address: "Χρυσοστόμου Σμύρνης 1",
  //   postalCode: "11144",
  //   floor: "5",
  //   bell: "ΑΝΤΩΝΟΠΟΥΛΟΣ",
  //   phone: "+30 6986061964",
  //   comments: "ΠΑΡΤΕ ΤΗΛΕΦΩΝΟ ΟΤΑΝ ΕΡΘΕΤΕ",
  // };

  // const cart = [
  //   {
  //     name: "Freddo Cappuccino",
  //     quantity: 1,
  //     price: 3.5,
  //     extras: [{ name: "XLarge (4 δόσεις)" }, { name: "Γλυκός" }, { name: "Καστανή ζάχαρη" }, { name: "Σκόνη σοκολάτας" }, { name: "Φρέσκο γάλα" }],
  //   },
  //   {
  //     name: "Monster Energy Classic 500ml",
  //     quantity: 1,
  //     price: 2.2,
  //   },
  // ];

  // const cartTotal = 5.7;
  // const tip = 1.0;

  // const discount = 0.0;

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
      .text("Στοιχεία πελάτη:")
      .feed(1)

      .align("lt")
      .size(0, 0)
      .style("B")
      .pureText("Διεύθυνση: ")
      .style("NORMAL")
      .text(client.address)

      .style("B")
      .pureText("Tαχ. κώδικας: ")
      .style("NORMAL")
      .text(client.postalCode)

      .style("B")
      .pureText("Όροφος: ")
      .style("NORMAL")
      .text(client.floor)

      .style("B")
      .pureText("Κουδούνι: ")
      .style("NORMAL")
      .text(client.bell)

      .style("B")
      .pureText("Τηλέφωνο: ")
      .style("NORMAL")
      .text(client.phone)

      .style("B")
      .pureText("Σχόλια: ")
      .style("NORMAL")
      .text(client.comments)
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

    if (order.paymentMethod === "PREPAID") {
      printer.size(0, 1);
      printer.tableCustom([
        { text: "Tip διανομέα:", width: 0.5, style: "B" },
        { text: `${order.courierTip.toFixed(2)}`, align: "RIGHT", width: 0.5, style: "B" },
      ]);
    }

    printer.feed(4).cut().close();
  });
}

module.exports = printOrder;
