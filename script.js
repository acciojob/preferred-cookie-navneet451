//your JS code here. If required.
function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
    }

function getCookie(name) {
      const nameEQ = name + "=";
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }

function loadPreferences() {
      const fontSize = getCookie("fontSize");
      const fontColor = getCookie("fontColor");

      if (fontSize) {
        document.getElementById("content").style.fontSize = fontSize + "px";
        document.getElementById("fontsize").value = fontSize;
      }
      if (fontColor) {
        document.getElementById("content").style.color = fontColor;
        document.getElementById("fontcolor").value = fontColor;
      }
    }

function savePreferences(event) {
      event.preventDefault(); // Prevent form submission

      // Get the values from form inputs
      const fontSize = document.getElementById("fontsize").value;
      const fontColor = document.getElementById("fontcolor").value;

      // Set cookies for font size and color (valid for 7 days)
      setCookie("fontSize", fontSize, 7);
      setCookie("fontColor", fontColor, 7);

      // Apply the preferences immediately
      document.getElementById("content").style.fontSize = fontSize + "px";
      document.getElementById("content").style.color = fontColor;

      alert("Preferences saved!");
    }

window.onload = loadPreferences;

document.getElementById("customizationForm").addEventListener("submit", savePreferences);
