const popups ={
  body:{
    license:
    `<img src='../img/notice.svg'></img>
    <h3>New licensing model</h3>
    <p>Nutanix now allows you to license hardware based on its capacity. We hope you enjoy this new licensing model.<br><br><a>Learn more</a></p>`,

    confirmation:
    `<p>Your cluster will be licensed under a Starter license, this process may take a couple of minutes, please wait paciently until the we have finalized the process.</p>`
  },

  footer:{
    license:
    `<button class='secondary'>Close</button>`,
    confirmation:
    `<button class='secondary'>Cancel</button>
    <button class='primary license' style='margin-left:10px;'>Continue</button>`
  }
}

function popupCreate(i,j,k){
  $('body').append(`
    <div class='overlay' style='display:none;'>
      <div class='popup'>
        <div class='popup-header'>${i}</div>
        <div class="popup-body">${j}</div>
        <div class="popup-footer">${k}</div>
     </div>
    </div>
  `);

  $('.popup-footer').find('button').click(function(){
    $('.overlay').fadeToggle();
  });
}
