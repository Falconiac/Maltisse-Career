// Sauberes, kleines Script für Interaktion & Form-Submit
(function () {
  // DOM-Referenzen
  const form = document.getElementById("contactForm");
  const btn = document.getElementById("btnSubmit");
  const chkTerms = document.getElementById("chkTerms");
  const chkPrivacy = document.getElementById("chkPrivacy");
  const status = document.getElementById("status");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (!form || !btn || !chkTerms || !chkPrivacy || !status) {
    // Guard Clause: UI unvollständig → keine Logik ausführen
    return;
  }

  function updateSubmitEnabled() {
    const ok = chkTerms.checked && chkPrivacy.checked;
    if (!ok) {
      btn.disabled = true;
      return;
    }
    btn.disabled = false;
  }

  chkTerms.addEventListener("change", updateSubmitEnabled);
  chkPrivacy.addEventListener("change", updateSubmitEnabled);
  updateSubmitEnabled();

  form.addEventListener("submit", async function (ev) {
    status.textContent = "";

    if (!form.checkValidity()) {
      ev.preventDefault();
      status.textContent = "Bitte alle Pflichtfelder korrekt ausfüllen.";
      return;
    }

    // Ajax-Submit: verhindert Reload und ermöglicht klare Statusmeldungen
    ev.preventDefault();

    const formData = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!res.ok) {
        status.textContent =
          "Senden fehlgeschlagen. Bitte später erneut versuchen.";
        return;
      }

      form.reset();
      updateSubmitEnabled();
      status.textContent = "Danke! Deine Nachricht wurde gesendet.";
    } catch (e) {
      status.textContent = "Netzwerkfehler. Bitte später erneut versuchen.";
    }
  });
})();
