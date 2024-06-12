let coins = parseInt(localStorage.getItem('coins')) || 0;
let clickRate = parseInt(localStorage.getItem('clickRate')) || 1;
let clickLimit = parseInt(localStorage.getItem('clickLimit')) || 5;
let clickValue = parseInt(localStorage.getItem('clickValue')) || 1;
let upgradeCost = parseInt(localStorage.getItem('upgradeCost')) || 100;
let upgradeValueCost = parseInt(localStorage.getItem('upgradeValueCost')) || 100;
let clicks = parseInt(localStorage.getItem('clicks')) || 0;
let lastClickTime = Date.now();
let upgradeClickLevel = parseInt(localStorage.getItem('upgradeClickLevel')) || 1;
let upgradeValueLevel = parseInt(localStorage.getItem('upgradeValueLevel')) || 1;
const maxUpgradeLevel = 50;

document.getElementById('coins').innerText = coins.toLocaleString('fa'); // استفاده از فارسی‌سازی برای نمایش سکه‌ها
document.getElementById('clickRate').innerText = clickRate.toLocaleString('fa');
document.getElementById('clickValue').innerText = clickValue.toLocaleString('fa');
document.getElementById('upgradeCost').innerText = upgradeCost.toLocaleString('fa');
document.getElementById('upgradeValueCost').innerText = upgradeValueCost.toLocaleString('fa');
document.getElementById('clicks').innerText = clicks.toLocaleString('fa');
document.getElementById('upgradeClickLevel').innerText = upgradeClickLevel.toLocaleString('fa');
document.getElementById('upgradeValueLevel').innerText = upgradeValueLevel.toLocaleString('fa');

// درج CPS و CV در منوی اصلی
document.getElementById('cps').innerText = (clickRate * clickLimit).toLocaleString('fa');
document.getElementById('cv').innerText = clickValue.toLocaleString('fa');

function saveState() {
    localStorage.setItem('coins', coins);
    localStorage.setItem('clickRate', clickRate);
    localStorage.setItem('clickLimit', clickLimit);
    localStorage.setItem('clickValue', clickValue);
    localStorage.setItem('upgradeCost', upgradeCost);
    localStorage.setItem('upgradeValueCost', upgradeValueCost);
    localStorage.setItem('clicks', clicks);
    localStorage.setItem('upgradeClickLevel', upgradeClickLevel);
    localStorage.setItem('upgradeValueLevel', upgradeValueLevel);
}

function upgradeClick() {
    if (upgradeClickLevel >= maxUpgradeLevel) {
        alert("شما به حداکثر سطح ارتقا رسیده‌اید.");
        return;
    }
    
    if (coins >= upgradeCost) {
        coins -= upgradeCost;
        clickRate++;
        clickLimit++;
        upgradeCost *= 2;
        upgradeClickLevel++;
        document.getElementById("coins").innerText = coins.toLocaleString('fa');
        document.getElementById("clickRate").innerText = clickRate.toLocaleString('fa');
        document.getElementById("upgradeCost").innerText = upgradeCost.toLocaleString('fa');
        document.getElementById("upgradeClickLevel").innerText = upgradeClickLevel.toLocaleString('fa');
        // به روز رسانی مقادیر CPS و CV
        document.getElementById('cps').innerText = (clickRate * clickLimit).toLocaleString('fa');
        saveState();
    } else {
        alert("شما به اندازه کافی سکه برای ارتقا ندارید.");
    }
}

function upgradeClickValue() {
    if (upgradeValueLevel >= maxUpgradeLevel) {
        alert("شما به حداکثر سطح ارتقا رسیده‌اید.");
        return;
    }
    
    if (coins >= upgradeValueCost) {
        coins -= upgradeValueCost;
        clickValue++;
        upgradeValueCost *= 2;
        upgradeValueLevel++;
        document.getElementById("coins").innerText = coins.toLocaleString('fa');
        document.getElementById("clickValue").innerText = clickValue.toLocaleString('fa');
        document.getElementById("upgradeValueCost").innerText = upgradeValueCost.toLocaleString('fa');
        document.getElementById("upgradeValueLevel").innerText = upgradeValueLevel.toLocaleString('fa