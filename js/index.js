let dark = false;
function darkMode() {
    if (dark == false) { // dark가 false일때 누르면
        dark = true; // dark는 true가 된다

        document.querySelector(".fa-moon").classList.add("fa-sun");
        document.querySelector(".fa-moon").classList.remove("fa-moon");
        // moon 자리에 sun 아이콘을 가지고 오며 moon을 제거

        document.querySelector("html").classList.add("dark");

        localStorage.setItem("dark", true);
        // 새로고침해도 darkmode 안풀리게 local storage database true해줌

    } else { // dark가 false가 아니라면 (dark가 true라면)
        dark = false; // dark는 false가 된다

        document.querySelector(".fa-sun").classList.add("fa-moon");
        document.querySelector(".fa-sun").classList.remove("fa-sun");
        // sun 자리에 moon 아이콘을 가지고 오며 sun을 제거

        document.querySelector("html").classList.remove("dark");

        localStorage.removeItem("dark");
        // darkmode 풀었을 때 새로고침 해도 풀어지게 함
    }
}

const dark_Mode = localStorage.getItem("dark");

if (dark_Mode == "true") {
    darkMode();
}

function language(lang) {
    if (lang == "en") {
        localStorage.setItem("lang", "en");
    } else {
        localStorage.removeItem("lang", "en");
    }
}

const $lang = localStorage.getItem("lang");

// 다국어
const url = new URL(location.href).searchParams; // location.href 주소창
const lang = url.get("Lang");

// localStorage.setItem("lang", lang); // 다른 페이지에서도 그대로 다국어가 적용



axios.get("data/data.json")
.then(function(res) {

    if ($lang == "en") {
        res.data.EnNav.map((e, i) => {
            // console.log(e);
            document.querySelectorAll(".list li a")[i].textContent = e.title;
        });
    }

    if (lang == "en") {
        res.data.EnNav.map((e, i) => {
            // console.log(e);
            document.querySelectorAll(".list li a")[i].textContent = e.title;
        });
    }
})
.catch(function(error) {
    console.log(error);
});

// 다국어

// mobile Nav

function mNav() {
    document.querySelector(".m-btn").classList.toggle("on");
}

// mobile Nav