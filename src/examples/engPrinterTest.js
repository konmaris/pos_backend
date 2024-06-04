const path = require("path");
const escpos = require("escpos");
escpos.Network = require("escpos-network");

const device = new escpos.Network("192.168.1.200");

const printer = new escpos.Printer(device);

const tux = path.join(__dirname, "logo2.png");
console.log(tux);

escpos.Image.load(tux, function (image) {
  device.open(function (error) {
    //prettier-ignore
    printer
    .encode("ISO-8859-7")
    .font("a")
  

    .feed(1)  

      .align("ct")
    .size(2, 1)
    .style("B")
    .text("DELIVERY")
    .newLine()

      .align("ct")
      .size(0, 0)
      .style("NORMAL")
      .text("Date: 28/03/2024")

      .align("ct")
      .size(0, 0)
      .style("NORMAL")
      .text("Time: 18:47")
      .newLine()
      .newLine()

      .align("ct")
      .size(2, 1)
      .style("B")
      .text("EFOOD")
      .newLine()

      .align("ct")
      .size(2, 1)
      .style("B")
      .text("#001")
      .newLine()

      .align("ct")
      .style("B")
      .size(1, 1)
      .text("CASH")
      .newLine()

      .align("lt")
      .size(0, 1)
      .style("NORMAL")
      .text("Customer details:")
      .feed(1)

      .align("lt")
      .size(0, 0)
      .style("B")
      .pureText("Address: ")
      .style("NORMAL")
      .text("Chrisostomou Smirnis 1")

      .style("B")
      .pureText("Postal code: ")
      .style("NORMAL")
      .text("11144")

      .style("B")
      .pureText("Floor: ")
      .style("NORMAL")
      .text("5")

      .style("B")
      .pureText("Doorbell: ")
      .style("NORMAL")
      .text("ANTONOPOULOS")

      .style("B")
      .pureText("Telephone: ")
      .style("NORMAL")
      .text("+30 6986061964")
      .newLine()

      .align("lt")
      .size(0, 1)
      .style("NORMAL")
      .text("Order:")
      .feed(1)

      .size(0, 0)
      .tableCustom([
        { text: "2x", align: "LEFT", width: 0.1 },
        { text: "Freddo Espresso", align: "LEFT", width: 0.8, style: "B" },
        { text: "6.00", align: "RIGHT", width: 0.2 },
      ])

      .tableCustom([
        { text: "", width: 0.1 },
        { text: "XLarge (4 shots of espresso)", align: "LEFT", width: 0.9 },
      ])

      .tableCustom([
        { text: "", width: 0.1 },
        { text: "No sugar", align: "LEFT", width: 0.9 },
      ])

      .newLine()
      .newLine()

      .align("lt")
      .size(0, 1)
      .style("B")
      .text("Discount: 2.00")

      .align("lt")
      .size(1, 1)
      .text("Total: 4.00")

      .feed(4)
      .cut()
      .close();
  });
});
