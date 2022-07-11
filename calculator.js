const indicator = document.querySelector(".indicator");
let theme = localStorage.getItem("theme");
const main = document.getElementById("main-part");

const changeTheme = (themeNumber) => {
  let indicatorStyle = indicator.style;
  let rootElement = document.documentElement;
  if (themeNumber == "theme-one") {
    indicatorStyle.left = "3px";
    indicatorStyle.transform = "translateX(0%)";
    rootElement.classList.remove("theme-three", "theme-two");
    localStorage.setItem("theme", "theme-one");
    document.querySelector(".attribution").style.color = "hsl(6, 63%, 50%)";
    // document.querySelector('.creater').style.color="hsl(0, 0%, 93%)";
    document.querySelector(".creater2").style.color = "hsl(0, 0%, 93%)";
  } else if (themeNumber == "theme-two") {
    indicatorStyle.left = "50%";
    indicatorStyle.transform = "translateX(-50%)";
    rootElement.classList.remove("theme-three");
    rootElement.classList.add("theme-two");
    localStorage.setItem("theme", "theme-two");
    document.querySelector(".attribution").style.color = "rgb(187, 66, 18)";
    // document.querySelector('.creater').style.color="hsl(185, 58%, 25%)";
    document.querySelector(".creater2").style.color = "hsl(185, 58%, 25%)";
  } else {
    indicatorStyle.right = "3px";
    indicatorStyle.left = "auto";
    indicatorStyle.transform = "translateX(0%)";
    rootElement.classList.remove("theme-two");
    rootElement.classList.add("theme-three");
    localStorage.setItem("theme", "theme-three");
    document.querySelector(".attribution").style.color = "";
    // document.querySelector('.creater').style.color= "hsl(177, 92%, 70%)";
    document.querySelector(".creater2").style.color = "hsl(177, 92%, 70%)";
  }
};

changeTheme(theme);
// js for visitor count
var n = localStorage.getItem("on_load_counter");

if (n === null) {
  n = 0;
}
n++;

localStorage.setItem("on_load_counter", n);
nums = n.toString().split("").map(Number);
document.getElementById("CounterVisitor").innerHTML = "";
var i;
for (i = 6; i > nums.length; i--) {
  var cla = "counter counter-item-" + i;

  var claa = "<div class=" + cla + ">" + 0 + "</div>";
  if (i > nums.length) {
    document.getElementById("CounterVisitor").innerHTML += claa;
  }
}
for (i = 0; i < nums.length; i++) {
  var cla = "counter counter-item-" + (i + 1);
  var claa = "<div class=" + cla + ">" + nums[i] + "</div>";
  document.getElementById("CounterVisitor").innerHTML += claa;
}

let a = 0;

function insert(num) {
  document.form1.textview.value = document.form1.textview.value + num;
  if (a == 1) {
    document.getElementById("frac").value = `frac(${document.form1.textview.value})`;
  }
  if (a == 2) {
    document.getElementById("log").value = `log(${document.form1.textview.value})`;
  }
}


function equal() {
  var exp = document.form1.textview.value;
  if (exp) {
    document.form1.textview.value = eval(exp);
  }
}

function backspace() {
  var exp = document.form1.textview.value;
  if ((exp = "not defined")) {
    document.form1.textview.value = "";
  } else {
    document.form1.textview.value = exp.substring(0,exp.length - 1); /* remove the element from total length ? 1 */
  }
  if (a == 1) {
    document.getElementById(
      "frac"
    ).value = `frac(${document.form1.textview.value})`;
  }
  if (a == 2) {
    document.getElementById(
      "log"
    ).value = `log(${document.form1.textview.value})`;
  }
}

function standard() {
  document.form1.textview.value = "";
  a = 0;
  main.innerHTML = `<center>
  <div class="cal">
    <table>
      <tr>
        <td><input class="btn btn1" type="button" value="7" onclick="insert(7)"></td>
        <td><input class="btn btn1" type="button" value="8" onclick="insert(8)"></td>
        <td><input class="btn btn1" type="button" value="9" onclick="insert(9)"></td>
        <td><input class="btn btn-delete btn1" type="button" value="DEL" onclick="backspace()"></td>
      </tr>

      <tr>
        <td><input class="btn btn1" type="button" value="4" onclick="insert(4)"></td>
        <td><input class="btn btn1" type="button" value="5" onclick="insert(5)"></td>
        <td><input class="btn btn1" type="button" value="6" onclick="insert(6)"></td>
        <td><input class="btn btn1" type="button" value="+" onclick="insert('+')"></td>
      </tr>

      <tr>
        <td><input class="btn btn1" type="button" value="1" onclick="insert(1)"></td>
        <td><input class="btn btn1" type="button" value="2" onclick="insert(2)"></td>
        <td><input class="btn btn1" type="button" value="3" onclick="insert(3)"></td>
        <td><input class="btn btn1" type="button" value="-" onclick="insert('-')"></td>
      </tr>

      <tr>
        <td><input class="btn btn1" type="button" value="." onclick="insert('.')"></td>
        <td><input class="btn btn1" type="button" value="0" onclick="insert(0)"></td>
        <td><input class="btn btn1" type="button" value="/" onclick="insert('/')"></td>
        <td><input class="btn btn1" type="button" value="&#215" onclick="insert('*')"></td>

      </tr>
    </table>
    <input class="btn btn1" type="button" value="C" onclick="backspace()">
    <input class="btn btn-reset-1 btn1" type="button" style="width: 128px" value="RESET"
      onclick="form1.textview.value = ' ' ">
    <input class="btn btn-reset-2" type="button" style="width: 128px" value="result" onclick="equal()">
  </div>

</center>`;
}

function fractorial_cal() {
  document.form1.textview.value = "";
  a = 1;
  main.innerHTML = `<center>
  <div class="cal">
    <table>
      <tr>
        <td><input class="btn btn1" type="button" value="7" onclick="insert(7)"></td>
        <td><input class="btn btn1" type="button" value="8" onclick="insert(8)"></td>
        <td><input class="btn btn1" type="button" value="9" onclick="insert(9)"></td>
      </tr>

      <tr>
        <td><input class="btn btn1" type="button" value="4" onclick="insert(4)"></td>
        <td><input class="btn btn1" type="button" value="5" onclick="insert(5)"></td>
        <td><input class="btn btn1" type="button" value="6" onclick="insert(6)"></td>
      </tr>

      <tr>
        <td><input class="btn btn1" type="button" value="1" onclick="insert(1)"></td>
        <td><input class="btn btn1" type="button" value="2" onclick="insert(2)"></td>
        <td><input class="btn btn1" type="button" value="3" onclick="insert(3)"></td>
      </tr>

      <tr>
        <td><input class="btn btn1" type="button" value="." onclick="insert('.')"></td>
        <td><input class="btn btn1" type="button" value="0" onclick="insert(0)"></td>
        <td><input class="btn btn1" type="button" value="-" onclick="negative()"></td>
        
        
        </tr>
        </table>
    <input class="btn btn1" type="button" value="C" onclick="backspace()">
    <input class="btn btn-reset-1 btn1" type="button" style="width: 110px" value="RESET"
      onclick="form1.textview.value = ' ' ">
    <input class="btn btn-reset-2" id="frac" type="button" style="width: 135px" value="result" onclick="frac()">
  </div>

</center>`;
}

function log_cal() {
  document.form1.textview.value = "";
  a = 2;
  main.innerHTML = `<center>
  <div class="cal">
    <table>
      <tr>
        <td><input class="btn btn1" type="button" value="7" onclick="insert(7)"></td>
        <td><input class="btn btn1" type="button" value="8" onclick="insert(8)"></td>
        <td><input class="btn btn1" type="button" value="9" onclick="insert(9)"></td>
      </tr>

      <tr>
        <td><input class="btn btn1" type="button" value="4" onclick="insert(4)"></td>
        <td><input class="btn btn1" type="button" value="5" onclick="insert(5)"></td>
        <td><input class="btn btn1" type="button" value="6" onclick="insert(6)"></td>
      </tr>

      <tr>
        <td><input class="btn btn1" type="button" value="1" onclick="insert(1)"></td>
        <td><input class="btn btn1" type="button" value="2" onclick="insert(2)"></td>
        <td><input class="btn btn1" type="button" value="3" onclick="insert(3)"></td>
      </tr>

      <tr>
        <td><input class="btn btn1" type="button" value="." onclick="insert('.')"></td>
        <td><input class="btn btn1" type="button" value="0" onclick="insert(0)"></td>
        <td><input class="btn btn1" type="button" value="-" onclick="negative()"></td>
        
        </tr>
        </table>
    <input class="btn btn1" type="button" value="C" onclick="backspace()">
    <input class="btn btn-reset-1 btn1" type="button" style="width: 110px" value="RESET"
      onclick="form1.textview.value = ' ' ">
    <input class="btn btn-reset-2" id="log" type="button" style="width: 135px" value="Result" onclick="log()">
  </div>

</center>`;
}

function frac() {
  let b = document.form1.textview.value;
  let ans = 1;
  if (b % 1 != 0 || b < 0) {
    document.form1.textview.value = "not defined";
  } else {
    if (b == 0) {
      ans = 1;
    } else {
      for (i = 0; i < b; i++) {
        ans = ans * (i + 1);
      }
    }
    document.form1.textview.value = `frac(${b}) = ${ans}`;
  }
}

function log() {
  let b = document.form1.textview.value;
  if (b <= 0) {
    document.form1.textview.value = "Not defined";
  } else {
    let ans = Math.log(b);
    document.form1.textview.value = `log(${document.form1.textview.value}) = ${ans}`;
  }
}

function negative() {
  document.form1.textview.value = -document.form1.textview.value;
  if (a == 1) {
    document.getElementById("frac").value = `frac(${document.form1.textview.value})`;
  }
  if (a == 2) {
    document.getElementById("log").value = `log(${document.form1.textview.value})`;
  }
}
