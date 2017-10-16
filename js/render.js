//First Time loading

Acropolis(0, 'Select&nbsp;&nbsp;&nbsp;');
popupCreate('Licensing Changes', popups.body.license, popups.footer.license)
noaddonBlock();
aosDropdownData(0);
addonDropdownData();
xcheck();


//click on options

$('.flow-options').find('code:eq(0)').click(function(){
  $('.data-block, .overlay').remove();
  Acropolis(0, 'Select&nbsp;&nbsp;&nbsp;');
  noaddonBlock();
  aosDropdownData(0);
  addonDropdownData();
  xcheck();
  popupCreate('Licensing Changes', popups.body.license, popups.footer.license)
  $('.overlay').fadeToggle('fast');
});


$('.flow-options').find('code:eq(1)').click(function(){
  $('.overlay').remove();
  $('.data-block').remove();
  Acropolis(1, 'Upgrade');
  addonsBlock();
  aosDropdownData(1);
  addonDropdownData();
  ycheck();
  $('.multi-button:eq(0)').append(`<div class='data-button-grouping alternative' style='margin-left:10px;'>
    <kbd>Unused licenses</kbd>
    <select style='width:130px' class='secondary reclaim'>
    <option disabled selected>120000 CCU Available</option>
    <optgroup label=""></optgroup>

    <option class='other' value='Add License'>
      Add New Node License
    </option>
    <optgroup class='other' label='Use CCUs to License new nodes'>
    </optgroup>

    <option class='other' value='Reclaim'>
      Reclaim Licenses
    </option>
    <optgroup class='other' label='Take CCUs out of this cluster'>
    </optgroup>


    </select>
  </div>`);
});


//dropdown changes

function xcheck(){
$('select').change(function(){
  if ($('.Acropolis').val() == 'Starter'){
    $('.overlay').remove();
    popupCreate('Confirmation', popups.body.confirmation, popups.footer.confirmation)
    $('.overlay').fadeToggle('fast');
    $('.license').click(function(){
      replaceAcropolis(1, 'Upgrade');
      aosDropdownData(1);
      xcheck();
    });
  }
  if ($('.Acropolis').val() == 'Pro'){
    $('.overlay').remove();
    popupCreate('Confirmation', popups.body.confirmation, popups.footer.confirmation)
    $('.overlay').fadeToggle('fast');
    $('.license').click(function(){
      replaceAcropolis(2, 'Upgrade');
      aosDropdownData(2);
      xcheck();
    });
  }

  if ($('.Acropolis').val() == 'Ultimate'){
    $('.overlay').remove();
    popupCreate('Confirmation', popups.body.confirmation, popups.footer.confirmation)
    $('.overlay').fadeToggle('fast');
    $('.license').click(function(){
      replaceAcropolis(3, 'Upgrade');
      aosDropdownData(3);
      xcheck();
    });
  }

  if ($('.Add-On').val() == 'Software Encrypt'){
  replaceAddon2();
  addonDropdownData();
  xcheck();
  textSize();
  }

  if ($('.Add-On').val() == 'File Server'){
  replaceAddon();
  addonDropdownData();
  xcheck();
  }
});
}

function ycheck(){
  $('select').change(function(){
    if ($('.Add-On').val() == 'Software Encrypt'){
    addAddon('Software Encrypt');
    textSize();
    xcheck();
    }
  });
}





//ESC menu

$(document).keyup(function(e) {
  if (e.keyCode === 27) $('.flow-options').fadeToggle("slow");   // esc
});
