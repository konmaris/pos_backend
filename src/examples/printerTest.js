const escpos = require("escpos");
escpos.Network = require("escpos-network");

const device = new escpos.Network("192.168.68.108");

const printer = new escpos.Printer(device);

device.open(function (error) {
  //prettier-ignore
  printer
    .encode("ISO-8859-7")
    .font("a")
    .align("lt")

    .align("ct")
    .size(2, 1)
    .style("B")
    .text("DELIVERY")
    .newLine()

    .align("ct")
    .size(0, 0)
    .style("b")
    .text("ESPRESAKI COFFEE ROASTERS")
    .newLine()

    .align("ct")
    .size(0, 0)
    .style("NORMAL")
    .text("Ημερομηνία: 28/03/2024")

    .align("ct")
    .size(0, 0)
    .style("NORMAL")
    .text("Ώρα: 18:47")
    .newLine()
    .newLine()

    .align("ct")
    .size(2, 1)
    .style("B")
    .text("#001")
    .newLine()

    .align("ct")
    .style("B")
    .size(1, 1)
    .text("ΜΕΤΡΗΤΑ")
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
    .text("Χρυσοστόμου Σμύρνης 1")
    
    .style("B")
    .pureText("Tαχ. κώδικας: ")
    .style("NORMAL")
    .text("11144")

    .style("B")
    .pureText("Όροφος: ")
    .style("NORMAL")
    .text("5")

    .style("B")
    .pureText("Κουδούνι: ")
    .style("NORMAL")
    .text("ΑΝΤΩΝΟΠΟΥΛΟΣ")

    .style("B")
    .pureText("Τηλέφωνο: ")
    .style("NORMAL")
    .text("+30 6986061964")
    .newLine()

    .align("lt")
    .size(0, 1)
    .style("NORMAL")
    .text("Παραγγελία:")
    .feed(1)

    .size(0, 0)
    .tableCustom(
        [
            { text:"2x", align:"LEFT", width:0.10},
            { text:"Freddo Espresso", align:"LEFT", width:0.70, style: 'B' },
            { text:"6.00", align:"RIGHT", width:0.20,},
            
        ],
       
      )

      .tableCustom(
        [
            {text: "", width: 0.1},
            { text: "Τετραπλός", align: "LEFT", width: 0.9, style: "I"},
            
        ],
        
      )
     
      .tableCustom(
        [
            {text: "", width: 0.1},
            { text: "Σκέτος", align: "LEFT", width: 0.9, style: "I"},
            
        ],
        
      )

     

      .newLine()
      .newLine()

        .align("lt")
        .size(1,1)
        .text("Σύνολο:   6.00")
        

        


      
      
       
      
     
    
    .feed(4).cut().close();
});
