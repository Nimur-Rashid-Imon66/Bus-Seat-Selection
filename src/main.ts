import './style.css'

const seats: string[] = ['A1', 'A2', 'A3', 'A4',
  'B1', 'B2', 'B3', 'B4',
  'C1', 'C2', 'C3', 'C4',
  'D1', 'D2', 'D3', 'D4',
  'E1', 'E2', 'E3', 'E4',
  'F1', 'F2', 'F3', 'F4',
  'G1', 'G2', 'G3', 'G4',
  'H1', 'H2', 'H3', 'H4',
  'I1', 'I2', 'I3', 'I4',
  'J1', 'J2', 'J3', 'J4'
]

const selectedSeat: number[] = [
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
];
let totalPrice: number = 0;

let cntOfSeat: number = 0;
function IsAddMore(): boolean {
  if (cntOfSeat < 4) return true;
  return false;
}

function getSelectedSeat(): string[] {
  let SelectedSeats: string[] = [];
  selectedSeat.forEach((s, idx) => {
    if (s) SelectedSeats.push(seats[idx]);
  })

  return SelectedSeats;
}

// function setCounter() {
//   document.querySelector<HTMLDivElement>('#counter')!.innerHTML = `${cntOfSeat} seats are selected `
// }

function setSelectedSeats() {
  let S_seats = getSelectedSeat();
  // document.querySelector<HTMLDivElement>('#selectedSeats')!.innerHTML = `No seat selected yet!!`
  if (cntOfSeat) {
    let inrTxt = `<table>
    <tr>
      <th class="th">Seat</th>
      <th>Price</th>
    </tr>`;
    S_seats.forEach((s) => {
      inrTxt += `<tr> <td class="td">${s}</td> <td>${550}tk</td></tr>`
    });
    inrTxt += `</table> `
    document.querySelector<HTMLDivElement>('#selectedSeats')!.innerHTML = `
    <div>${inrTxt}</div>`
  }
  else
    document.querySelector<HTMLDivElement>('#selectedSeats')!.innerHTML = `No seat selected yet!!`
}
function setTotalPrice() {
  document.querySelector<HTMLSpanElement>('#totalPrice')!.innerHTML = `${totalPrice}`
}
let col1: string = ``;
let col2: string = ``;
for (let i = 0; i < 40; i += 4) {
  col1 += `<button id=${seats[i]}> ${seats[i]} </button>
           <button id=${seats[i + 1]}>${seats[i + 1]}</button>`;
  col2 += `<button id=${seats[i + 2]}>${seats[i + 2]}</button>
           <button id=${seats[i + 3]}>${seats[i + 3]}</button>`;
}

// <-- <div id="counter"> ${cntOfSeat} seats are selected </div> -->

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Ticket Booking System</h1>
  <div class="main">
    <div class="seat">
        <div class="col1">
          ${col1}
        </div>
        <div class="col2">
          ${col2}
        </div>
    
    </div>

    <div class="Output">
        <div id="price">
        <span class="price-title"><img src="fare.png" width=60px; height=60px ></span>
        <span id="totalPrice">${totalPrice}</span>
        </div>
        
        <div id="selectedSeats"> No seat selected yet!! </div>
    </div>
 
      
  </div>
`




function seatSelection(e:any) {
  let x = e.target;
  if (x != null) console.log(x.id);
  let idx = seats.findIndex(e => (x.id === e));
  if (selectedSeat[idx]) {
    selectedSeat[idx] = Math.abs(1 - selectedSeat[idx])
    e.target.style.backgroundColor = '#1a1a1a';
    cntOfSeat--;
    totalPrice -= 550;
    // setCounter();
    setTotalPrice();
    setSelectedSeats();
    return;
  }

  if (IsAddMore()) {
    selectedSeat[idx] = Math.abs(1 - selectedSeat[idx])
    e.target.style.backgroundColor = 'red';
    cntOfSeat++;
    totalPrice += 550;
    // setCounter();
    setTotalPrice();
    setSelectedSeats();
  }
  else {
    alert("You can choose only four(4) seats!!")
  }


}
let arr: HTMLButtonElement[] = [];
seats.forEach((s) => {
  let a1 = document.querySelector<HTMLButtonElement>(`#${s}`)!;
  arr.push(a1);
})

for (let i = 0; i < arr.length; i++)
  arr[i]?.addEventListener('click', (e) => { seatSelection(e) })

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
