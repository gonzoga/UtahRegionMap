function dtsRemoveGoogleTranslateForm() {
  document.querySelectorAll('#goog-gt-tt').forEach(element => element.remove());
}

function dtsMakeGoogleTranslateA11y() {
  const gtButton = document.getElementById('glt-translate-trigger');
  if (gtButton) {
    gtButton.setAttribute('tabindex','0');
    gtButton.setAttribute('role',"button");
    gtButton.setAttribute('aria-label','Translate Page Content');
    gtButton.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        gtButton.click();
      }
    });
  }
}

function dtsRemoveNinjaTableSROnly() {
  const srOnlyLabels = document.querySelectorAll('.ninja_table_wrapper .sr-only');
  // console.log('sr-only count: ', srOnlyLabels.length);
  let srOnlyCount = srOnlyLabels.length;
  srOnlyLabels.forEach(element => element.remove());
  // Return true if it removed the elements
  return (srOnlyCount <= 0)
}

function dtsFixNinjaTablePageSizeSelect() {
  const ninjaSelects = document.querySelectorAll('.nt_customer_pager:not(:has(label)) select');

  // console.log('select count: ', ninjaSelects.length);

  ninjaSelects.forEach((select, index) => {
    // 1. Ensure the select has an ID so the label can 'point' to it
    // We check if it already has one, otherwise we create a unique one
    let selectId = select.getAttribute('id');
    if (!selectId) {
      selectId = `nt_pager_select_${index}`;
      select.setAttribute('id', selectId);
    }

    // 2. Create the label element
    const label = document.createElement('label');
    label.setAttribute('for', selectId);
    label.textContent = 'Page size';

    // Optional: Add a class for styling purposes
    label.classList.add('visually-hidden');

    // 3. Insert the label as a sibling immediately before the select
    select.parentNode.insertBefore(label, select);
  });
}

function dtsObserveNinjaTableChanges() {
  const observer = new MutationObserver((mutations) => {
    dtsFixNinjaTablePageSizeSelect();
  });

  const tables = document.querySelectorAll('.ninja_table_wrapper');
  tables.forEach((table) => {
    observer.observe(table, {
      childList: true,
      subtree: true
    });
  });
}

jQuery(window).on('load', function() {
  dtsRemoveGoogleTranslateForm();
  dtsMakeGoogleTranslateA11y();

  let srCounter = 0;
  let srInterval = setInterval(function() {
    dtsFixNinjaTablePageSizeSelect();
    if (dtsRemoveNinjaTableSROnly()) {
      srCounter++;
      if (srCounter > 2) {
        clearInterval(srInterval);
      }
    }
  }, 200)

  dtsObserveNinjaTableChanges();
});

