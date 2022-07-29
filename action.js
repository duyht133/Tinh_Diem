/* Khai báo biến */
let i = 1;
let Score = {
  ten: "",
  toan: 0,
  ly: 0,
  hoa: 0,
};
let table = document.querySelector(".table");
let enter = document.querySelector(".enter");

/* Sử lý sự kiện Nhập */
enter.addEventListener("click", () => {
  Score.ten = document.querySelector(".ten").value;
  if(!isNaN(Score.ten)){
    Score.ten = "noName"
  }

  Score.toan = parseInt(document.querySelector(".toan").value);
  if (Score.toan > 10) {
    Score.toan = 0;
  }
  Score.ly = parseInt(document.querySelector(".ly").value);
  if (Score.ly > 10) {
    Score.ly = 0;
  }
  Score.hoa = parseInt(document.querySelector(".hoa").value);
  if (Score.hoa > 10) {
    Score.hoa = 0;
  }
  /*tạo thêm bảng */
  let row = table.insertRow();
  /* tạo thêm cell vào bảng */
  row.insertCell(0).innerHTML = i++;
  row.insertCell(1).innerHTML = Score.ten;
  row.insertCell(2).innerHTML = Score.toan;
  row.insertCell(3).innerHTML = Score.ly;
  row.insertCell(4).innerHTML = Score.hoa;
  row.insertCell(5).innerHTML = "?";
  /* row.insertCell(6).innerHTML ="xoa"; */
  //test
  for(let j=1; j < table.rows.length; j++){
    let xoa = table.rows[j].cells[6]
    xoa.style.cursor = "pointer"
      xoa.addEventListener("click",()=>{
        table.rows[j].innerHTML = ''
      })
  }
  
  
  /* clear */
  clearInput();
});

/* Clear input */
let clearInput = () => {
  document.querySelector(".ten").value = "";
  document.querySelector(".toan").value = "";
  document.querySelector(".ly").value = "";
  document.querySelector(".hoa").value = "";
};


/* tính điểm trung bình */
let dtb = document.querySelector(".dtb");

dtb.addEventListener("click", () => {
  for (var j = 1; j < table.rows.length; j++) {
    /* lấy giá trị trong table để tính điểm trung Bình */
    let toan = table.rows[j].cells[2].innerHTML
    let ly = table.rows[j].cells[3].innerHTML
    let hoa = table.rows[j].cells[4].innerHTML
    tb = (parseInt(toan) + parseInt(ly) + parseInt(hoa)) /3
    table.rows[j].cells[5].innerHTML= parseInt(tb);
    
    console.log(tb)
  }
});

/* Xác định học sinh giỏi */
let best = document.querySelector(".best_student") 

best.addEventListener("click",() => {
  for (var j = 1; j < table.rows.length; j++){
    let vitriTb = table.rows[j].cells[5].innerHTML
    if(vitriTb >= 8){
      table.rows[j].cells[5].bgColor= "#7FFF00";

      console.log(vitriTb)
    }
  }
})




