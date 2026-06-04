
// Toggle sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

// =============================
// Proteksi Dasar Web Statis
// =============================

// Validasi Input Form
function validateInput(input) {
  const regex = /^[a-zA-Z0-9\s.,!?-]*$/; // whitelist karakter
  return regex.test(input);
}

document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    const inputs = form.querySelectorAll("input, textarea");
    for (let inp of inputs) {
      if (!validateInput(inp.value)) {
        alert("Input mengandung karakter tidak valid!");
        e.preventDefault();
        return false;
      }
    }
  });
});

// Sanitasi Output
function safeText(element, text) {
  element.textContent = text;
}

// Proteksi DOM Manipulation
function safeAppend(parent, childText) {
  const node = document.createElement("div");
  node.textContent = childText;
  parent.appendChild(node);
}

// Error Handling Aman
window.onerror = function(message, source, lineno, colno, error) {
  console.error("Error terjadi:", message);
  alert("Terjadi kesalahan, silakan coba lagi.");
  return true;
};

// =============================
// Proteksi Keyboard & Shortcut
// =============================

document.addEventListener("keydown", function(e) {
  const blockedShortcuts = [
    { ctrl: true, key: "u" }, // Ctrl+U (View Source)
    { ctrl: true, key: "s" }, // Ctrl+S (Save)
    { ctrl: true, key: "c" }, // Ctrl+C (Copy)
    { ctrl: true, key: "v" }, // Ctrl+V (Paste)
    { ctrl: true, key: "x" }, // Ctrl+X (Cut)
    { ctrl: true, key: "a" }, // Ctrl+A (Select All)
    { ctrl: true, shift: true, key: "i" }, // Ctrl+Shift+I (Inspect)
    { ctrl: true, shift: true, key: "j" }, // Ctrl+Shift+J (Console)
    { ctrl: true, shift: true, key: "c" }, // Ctrl+Shift+C (Element Picker)
    { ctrl: true, shift: true, key: "s" }  // Ctrl+Shift+S (Save As)
  ];

  // F12
  if (e.key === "F12") {
    e.preventDefault();
    alert("Akses DevTools diblokir!");
  }

  // Loop cek shortcut
  blockedShortcuts.forEach(sc => {
    if (
      (!!sc.ctrl === e.ctrlKey) &&
      (!!sc.shift === e.shiftKey) &&
      e.key.toLowerCase() === sc.key
    ) {
      e.preventDefault();
      alert("halo!!,silakan coba lagi");
    }
  });
});

// =============================
// Proteksi Mouse & Teks
// =============================

// Blokir klik kanan
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
  alert("silakan coba lagi");
});


// Blokir copy
document.addEventListener("copy", function(e) {
  e.preventDefault();
  alert("silakan coba lagi");
});

// Blokir paste
document.addEventListener("paste", function(e) {
  e.preventDefault();
  alert("silakan coba lagi");
});

// Blokir cut
document.addEventListener("cut", function(e) {
  e.preventDefault();
  alert("silakan coba lagi");
});

// Blokir drag & drop
document.addEventListener("dragstart", function(e) {
  e.preventDefault();
  alert("silakan coba lagi");
});

document.addEventListener("drop", function(e) {
  e.preventDefault();
  alert("silakan coba lagi");
});

// =============================
// Proteksi Storage
// =============================
function safeStore(key, value) {
  if (key.toLowerCase().includes("password") || key.toLowerCase().includes("token")) {
    console.warn("Data sensitif tidak boleh disimpan di localStorage!");
    return;
  }
  localStorage.setItem(key, value);
}


// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.querySelector('.hamburger');
  
  if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
    sidebar.classList.remove('active');
  }
});


