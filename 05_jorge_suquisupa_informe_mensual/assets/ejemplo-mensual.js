(() => {
  "use strict";

  const core = window.EdicionCore;
  const controls = document.querySelector(".month-switch");
  if (!core || !controls) return;

  const periods = {
    "2026-10": [60, 54, 36],
    "2026-11": [72, 58, 50]
  };
  const categories = ["A", "B", "C"];
  const buttons = [...controls.querySelectorAll("[data-demo-period]")];
  const get = id => document.getElementById(id);
  const download = get("demo-export");
  const state = core.initial();

  state.template.title = "Informe mensual de demostración";
  state.template.organization = "Ejemplo con datos ficticios";
  state.template.indicator = "Unidades registradas";
  state.template.unit = "unidades";
  state.rows = Object.entries(periods).flatMap(([period, amounts]) =>
    amounts.map((amount, index) => ({
      id: period + "-" + categories[index],
      date: period,
      category: "Categoría " + categories[index],
      value: String(amount)
    }))
  );

  function showMonth(period, announce) {
    state.period = period;
    const data = core.analyze(state);
    const month = core.monthLabel(period);
    const total = core.numberLabel(data.total);
    get("demo-period").textContent = month;
    get("demo-total").textContent = total;
    get("demo-table-total").textContent = total;

    for (const group of data.groups) {
      const key = group.category.at(-1).toLowerCase();
      const amount = core.numberLabel(group.total);
      const bar = get("demo-bar-" + key);
      bar.value = Number(amount);
      bar.textContent = amount;
      get("demo-value-" + key).textContent = amount;
    }

    for (const button of buttons) {
      button.setAttribute("aria-pressed", String(button.dataset.demoPeriod === period));
    }

    if (announce) get("demo-status").textContent = month + ", total de " + total + " unidades.";
  }

  download.addEventListener("click", () => {
    const file = new Blob([core.documentHTML(state)], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ejemplo-informe-" + state.period + ".html";
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });

  for (const button of buttons) {
    button.addEventListener("click", () => showMonth(button.dataset.demoPeriod, true));
  }

  showMonth("2026-11", false);
  controls.hidden = false;
  download.hidden = false;
})();

