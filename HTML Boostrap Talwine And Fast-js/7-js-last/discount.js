// first 100 ------> 100tk
// first 101-200 ------> 90tk
// first 201- ++++ ------> 80tk

function discount(ticketQuantity) {
   let first10Rate = 100;
   let second10Rate = 90;
   let restTicketRate = 80;
   if (ticketQuantity <= 10) {
      let fast = ticketQuantity * first10Rate;
      return fast;
   } else if (ticketQuantity > 10 && ticketQuantity <= 20) {
      let fast = first10Rate * 10;
      let lessDiscout = ticketQuantity - 10;
      let second = lessDiscout * second10Rate;
      total = fast + second;
      return total;
   } else if (ticketQuantity > 20) {
      let fast3 = first10Rate * 10;
      let second3 = second10Rate * 10;
      let thirdValue = ticketQuantity - 20;
      let third3 = thirdValue * restTicketRate;
      let total3 = fast3 + second3 + third3;
      return total3;
   }
}
let ticket = 22;
let totalTaka = discount(ticket);
console.log('Ticket Amout is ' + totalTaka);