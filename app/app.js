let appData = {
  days: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
  payRate: 0
};

function makeButtons() {
  let template = '';
  appData.days[0].forEach((week, index) => {
    template += `<div class="col-2 text-center">`
    template += `<button class="btn" onclick="dayIncrease(${index}, 0)"><h4><i class="far fa-plus-square"></i></h4></button>`
    template += `<h4 id="total0">0</h4>`
    template += `<button class="btn" onclick="dayDecrease(${index}, 0)"><h4><i class="far fa-minus-square"></i></h4></button>`
    template += `</div>`
  });
  template += `</div>`
  template += `<div class="col-2 d-flex flex-column justify-content-center"><h4>0</h4></div>`

  document.getElementById('week1').innerHTML = template;
  let template2 = '';
  appData.days[1].forEach((week, index) => {
    template2 += `<div class="col-2 text-center">`
    template2 += `<button class="btn" onclick="dayIncrease(${index}, 1)"><h4><i class="far fa-plus-square"></i></h4></button>`
    template2 += `<h4 id="total1">0</h4>`
    template2 += `<button class="btn" onclick="dayDecrease(${index}, 1)"><h4><i class="far fa-minus-square"></i></h4></button>`
    template2 += `</div>`
  });
  template2 += `</div>`
  template2 += `<div class="col-2 d-flex flex-column justify-content-center"><h4>0</h4></div>`

  document.getElementById('week2').innerHTML = template2;
};

function dayIncrease(day, week) {
  console.log(day, week)
  appData.days[week][day]++;
  console.log(week);

  draw()
}

function dayDecrease(day, week) {
  console.log(day, week)
  appData.days[week][day]--;
  draw()
}

function generateTotal(week) {
  let total = 0;
  appData.days[week].forEach(day => {
    total += day

  });
  return total
}

function draw(week) {
  document.getElementById('week1').innerText = generateTotal(week).toString();
  document.getElementById('week2').innerText = generateTotal(week).toString();
}

makeButtons()