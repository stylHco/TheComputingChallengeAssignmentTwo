/*global document: false */
/*global sessionStorage: false */
/*global localStorage: false */


// all the available products inside the array
var items = [
    [1, "UCLan Hoodie ", "Purple ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(1).jpg"],
    [2, "UCLan Hoodie ", "Light Blue ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(2).jpg "],
    [3, "UCLan Hoodie ", "Green ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(3).jpg "],
    [4, "UCLan Hoodie ", "Dark Grey ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(4).jpg "],
    [5, "UCLan Hoodie ", "Black ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(5).jpg "],
    [6, "UCLan Hoodie ", "Salmon ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(6).jpg "],
    [7, "UCLan Hoodie ", "Burgundy ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(7).jpg "],
    [8, "UCLan Hoodie ", "Light Grey ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(8).jpg "],
    [9, "UCLan Hoodie ", "Slate Blue ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(9).jpg "],
    [10, "UCLan Hoodie ", "Orange ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(10).jpg "],
    [11, "UCLan Hoodie ", "Teal ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(11).jpg "],
    [12, "UCLan Hoodie ", "Navy ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(12).jpg "],
    [13, "UCLan Hoodie ", "Orange ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(13).jpg "],
    [14, "UCLan Hoodie ", "Creame ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(14).jpg "],
    [15, "UCLan Hoodie ", "Lime ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(15).jpg "],
    [16, "UCLan Hoodie ", "Off Blue ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(16).jpg "],
    [17, "UCLan Hoodie ", "Red ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(17).jpg "],
    [18, "UCLan Hoodie ", "Charcoal ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(18).jpg "],
    [19, "UCLan Hoodie ", "Navy Blue ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(19).jpg "],
    [20, "UCLan Hoodie ", "Lighter Grey ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(20).jpg "],
    [21, "UCLan Hoodie ", "New Blue ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(21).jpg "],
    [22, "UCLan Hoodie ", "Forest Green ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(22).jpg "],
    [23, "UCLan Hoodie ", "Ocean Blue ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(23).jpg "],
    [24, "UCLan Hoodie ", "Pink ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(24).jpg "],
    [25, "UCLan Hoodie ", "Orange New ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(25).jpg "],
    [26, "UCLan Hoodie ", "Black ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(26).jpg "],
    [27, "UCLan Hoodie ", "Light Off Grey ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(27).jpg "],
    [28, "UCLan Hoodie ", "Rusty Red ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(28).jpg "],
    [29, "UCLan Hoodie ", "Slate Grey ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(29).jpg "],
    [30, "UCLan Hoodie ", "Bright Green ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(30).jpg "],
    [31, "UCLan Hoodie ", "Bright Pink ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(31).jpg "],
    [32, "UCLan Hoodie ", "Burgundy New ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(32).jpg "],
    [33, "UCLan Hoodie ", "Navy New ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(33).jpg "],
    [34, "UCLan Hoodie ", "Bright Green ", "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks ", " Only £39.99 ", "../Resources/images/items/hoodies/hoodie(34).jpg "],
    [1, "UCLan Logo Jumper ", "Purple ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(1).jpg "],
    [2, "UCLan Logo Jumper ", "Rusty Red ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(2).jpg "],
    [3, "UCLan Logo Jumper ", "Water Blue ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(3).jpg "],
    [4, "UCLan Logo Jumper ", "White ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(4).jpg "],
    [5, "UCLan Logo Jumper ", "Pink ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(5).jpg "],
    [6, "UCLan Logo Jumper ", "Black ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(6).jpg "],
    [7, "UCLan Logo Jumper ", "Old Blue ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(7).jpg "],
    [8, "UCLan Logo Jumper ", "Dark Grey  ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(8).jpg "],
    [9, "UCLan Logo Jumper ", "Red ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(9).jpg "],
    [10, "UCLan Logo Jumper ", "Brown ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(10).jpg "],
    [11, "UCLan Logo Jumper ", "Green ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(11).jpg "],
    [12, "UCLan Logo Jumper ", "Dark Red ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(12).jpg "],
    [13, "UCLan Logo Jumper ", "Yellow ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(13).jpg "],
    [14, "UCLan Logo Jumper ", "Light Grey ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(14).jpg "],
    [15, "UCLan Logo Jumper ", "Light Green ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(15).jpg "],
    [16, "UCLan Logo Jumper ", "Old Red ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(16).jpg "],
    [17, "UCLan Logo Jumper ", "Light Purple ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(17).jpg "],
    [18, "UCLan Logo Jumper ", "Slate Blue ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(18).jpg "],
    [19, "UCLan Logo Jumper ", "Real Red ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(19).jpg "],
    [20, "UCLan Logo Jumper ", "Old Pink ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(20).jpg "],
    [21, "UCLan Logo Jumper ", "Slate Grey ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(21).jpg "],
    [22, "UCLan Logo Jumper ", "Bright Green ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(22).jpg "],
    [23, "UCLan Logo Jumper ", "Teal ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(23).jpg "],
    [24, "UCLan Logo Jumper ", "Sky Blue ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(24).jpg "],
    [25, "UCLan Logo Jumper ", "Sunshine Pink ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(25).jpg "],
    [26, "UCLan Logo Jumper ", "Bronze ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(26).jpg "],
    [27, "UCLan Logo Jumper ", "Olive Green ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(27).jpg "],
    [28, "UCLan Logo Jumper ", "Bright White Green ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(28).jpg "],
    [29, "UCLan Logo Jumper ", "Navy Blue ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(29).jpg "],
    [30, "UCLan Logo Jumper ", "Rusty Orange ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(30).jpg "],
    [31, "UCLan Logo Jumper ", "Bright Orange ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(31).jpg "],
    [32, "UCLan Logo Jumper ", "Sky Purple ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(32).jpg "],
    [33, "UCLan Logo Jumper ", "Really Red ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(33).jpg "],
    [34, "UCLan Logo Jumper ", "Plum Purple ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(34).jpg "],
    [35, "UCLan Logo Jumper ", "Dark Purple ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(35).jpg "],
    [36, "UCLan Logo Jumper ", "Vibrant Red ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(36).jpg "],
    [37, "UCLan Logo Jumper ", "Ocean Blue ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(37).jpg "],
    [38, "UCLan Logo Jumper ", "Creame ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(38).jpg "],
    [39, "UCLan Logo Jumper ", "Lighter Blue ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(39).jpg "],
    [40, "UCLan Logo Jumper ", "Light Grey ", "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks ", " Only £29.99 ", "../Resources/images/items/jumpers/jumper(40).jpg "],
    [1, "UCLan Logo Tshirt ", "Navy Blue New ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(1).jpg "],
    [2, "UCLan Logo Tshirt ", "Rusty Red New ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(2).jpg "],
    [3, "UCLan Logo Tshirt ", "Burgundy ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(3).jpg "],
    [4, "UCLan Logo Tshirt ", "Pink ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(4).jpg "],
    [5, "UCLan Logo Tshirt ", "Teal ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(5).jpg "],
    [6, "UCLan Logo Tshirt ", "Black ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(6).jpg "],
    [7, "UCLan Logo Tshirt ", "Old Red ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(7).jpg "],
    [8, "UCLan Logo Tshirt ", "Grey ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(8).jpg "],
    [9, "UCLan Logo Tshirt ", "Red ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(9).jpg "],
    [10, "UCLan Logo Tshirt ", "Brown ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(10).jpg "],
    [11, "UCLan Logo Tshirt ", "Pdark Purple ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(11).jpg "],
    [12, "UCLan Logo Tshirt ", "Yellow ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(12).jpg "],
    [13, "UCLan Logo Tshirt ", "Mustard Yellow ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(13).jpg "],
    [14, "UCLan Logo Tshirt ", "Dark Grey ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(14).jpg "],
    [15, "UCLan Logo Tshirt ", "Dark Green ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(15).jpg "],
    [16, "UCLan Logo Tshirt ", "Bright Green ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(16).jpg "],
    [17, "UCLan Logo Tshirt ", "Olive Green ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(17).jpg "],
    [18, "UCLan Logo Tshirt ", "Dark Grey ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(18).jpg "],
    [19, "UCLan Logo Tshirt ", "Orange ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(19).jpg "],
    [20, "UCLan Logo Tshirt ", "Purple ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(20).jpg "],
    [21, "UCLan Logo Tshirt ", "Slate Blue ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(21).jpg "],
    [22, "UCLan Logo Tshirt ", "Bright Pink ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(22).jpg "],
    [23, "UCLan Logo Tshirt ", "Brightly Green ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(23).jpg "],
    [24, "UCLan Logo Tshirt ", "Lime Green ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(24).jpg "],
    [25, "UCLan Logo Tshirt ", "Ocean Blue ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(25).jpg "],
    [26, "UCLan Logo Tshirt ", "Dark Red ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(26).jpg "],
    [27, "UCLan Logo Tshirt ", "Another Green ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(27).jpg "],
    [28, "UCLan Logo Tshirt ", "Slate Grey ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(28).jpg "],
    [29, "UCLan Logo Tshirt ", "Bright Orange ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(29).jpg "],
    [30, "UCLan Logo Tshirt ", "Another Purple ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(30).jpg "],
    [31, "UCLan Logo Tshirt ", "Real Red ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(31).jpg "],
    [32, "UCLan Logo Tshirt ", "Brilliant Blue ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(32).jpg "],
    [33, "UCLan Logo Tshirt ", "Creame ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(33).jpg "],
    [34, "UCLan Logo Tshirt ", "Teal Blue ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(34).jpg "],
    [35, "UCLan Logo Tshirt ", "White ", "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days ", " Only £19.99 ", "../Resources/images/items/tshirts/tshirt(35).jpg "]
];


var element  = document.getElementById("item");


// get the element that is inside the session storage and converting it
// into the initial value type and assign it into an array.
var SessionArr = JSON.parse(sessionStorage.SessionItem);



//create new div with class name newdiv
var newdiv = document.createElement("div");
newdiv.setAttribute("class", "newdiv");



// the title is the combination of the type and the number of the product that are in the second and first
// index of the array accordingly.
var strTile = SessionArr[1] + "(" + SessionArr[0] + ")";




// newdiv is modified using backticks (`) for adding new Html elements inside and then append it
// to the element inside the html file.
// The new html elements are  the image of the product, the type, the number and color of the product
// then the description and the price of the product and for the end
// a new button that can be used for buy items and add them to the cart by calling a function every time
// that is clicked.
newdiv.innerHTML = `
       <div class="Imgdiv">
            <img src= ${SessionArr[5]} alt="The image cannot be fount!!">
       </div>
        <div class="productsdiv">
               <h2 class="title">${strTile + " - " + SessionArr[2]}</h2>
               <p class="description"> ${SessionArr[3]}</p>
               <p class="price">${SessionArr[4]}</p>
               <button onclick="UpdateLocal(SessionArr)" id="buyButton">Buy</button>
        </div>
       `;

element.appendChild(newdiv);





// add the element that user clicked to buy to the local storage and every time check for duplicates
function UpdateLocal (arrayElement){


       var key = SessionArr[1] + "(" + SessionArr[0] + ")";



       checkForDuplicates(key, arrayElement);
       alert(`You successfully add ${key}  to your card!!`);

}



// if a key is already exists inside the local storage
// then just simply add (1) and recall the function
// itself until there is no other element with the same key inside the local storage

function checkForDuplicates(key, arrayElement) {

       if (localStorage.getItem(key) !== null) {
             checkForDuplicates(key+="(1)",arrayElement);

       }
      localStorage.setItem(key,JSON.stringify(arrayElement));
}



function GoBack(){

    history.back();

}
