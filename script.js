// פונקציה לשמירת הערכים ב-cookies
function saveCookies() {
    const username = document.getElementById('username').value;
    const age = document.getElementById('age').value;
    const city = document.getElementById('city').value;
    
    // שמירת הערכים ב-cookies
    document.cookie = `username=${username}; path=/`;
    document.cookie = `age=${age}; path=/`;
    document.cookie = `city=${city}; path=/`;
    
    // הצגת ההודעה
    displayMessage();
}

// פונקציה להצגת ההודעה עם הערכים שנשמרו
function displayMessage() {
    const username = getCookie('username') || '[אין מידע כרגע]';
    const age = getCookie('age') || '[אין מידע כרגע]';
    const city = getCookie('city') || '[אין מידע כרגע]';
    
    const message = `שלום ${username}, גילך הוא ${age}, מקום מגורייך הוא ${city}`;
    document.getElementById('message').innerText = message;
}

// פונקציה לקבלת ערך מ-cookie לפי שם
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// פונקציה למחיקת cookie לפי שם
function deleteCookie(name) {
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    
    // עדכון ההודעה לאחר מחיקת הערך
    displayMessage();
}

// הצגת ההודעה בעת טעינת הדף אם יש ערכים ב-cookies
window.onload = displayMessage;
