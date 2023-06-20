function validasilogin() {
    var email = $("#inpEmail").val().trim();
    var password = $("#inpPassword").val().trim();
    let isValid = false;
    let msg = null;
  
    if (
      (email == null || email.length == 0) &&
      (password == null || password.length == 0)
    ) {
      isValid = true;
      msg = "Data tidak boleh kosong";
    } else {
      if (email == null || email.length == 0) {
        isValid = true;
        msg = "E-mail harus terisi";
      } else if (password == null || password.length == 0) {
        isValid = true;
        msg = "Password harus terisi";
      } else if (password != null && password.length > 0) {
        if (password.length < 8) {
          isValid = true;
          msg = "Password harus lebih dari 8 karakter";
        }
      }
    }
    if (isValid) {
        Swal.fire({
            icon: 'error',
            title: 'Login Gagal',
            text: msg,
            confirmButtonText: 'Oke',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
               
            } 
          })
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Login Berhasil',
            text: msg,
            confirmButtonText: 'Oke',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                location.href = "http://localhost/admin/home.html";
            } 
          })
    }
  }

  function validasiregister() {
    var nama = $("#inpNama").val().trim();
    var alamat = $("#inpAlamat").val().trim();
    var tglLahir = $("#inpTglLahir").val().trim();
    var email = $("#inpEmail").val().trim();
    var password = $("#inpPassword").val().trim();
    let isValid = false;
    let msg = null;
    
   
    if (
      (nama == null || nama.length == 0) &&
      (alamat == null || alamat.length == 0) &&
      (tglLahir == null || tglLahir.length == 0) &&
      (email == null || email.length == 0) &&
      (password == null || password.length == 0)
    ) {
      isValid = true;
      msg = "Data tidak boleh kosong";
    } else {
      if (nama == null || nama.length == 0) {
        isValid = true;
        msg = "Nama harus terisi";
      } else if (alamat == null || alamat.length == 0) {
        isValid = true;
        msg = "Alamat harus terisi";
      } else if (tglLahir == null || tglLahir.length == 0) {
        isValid = true;
        msg = "Tanggal lahir harus terisi";
      } else if (email == null || email.length == 0) {
        isValid = true;
        msg = "E-mail harus terisi";
      } else if (password == null || password.length == 0) {
        isValid = true;
        msg = "Password harus terisi";
      }
    }
    if (isValid) {
        Swal.fire({
            icon: 'error',
            title: 'Login Gagal',
            text: msg,
            confirmButtonText: 'Oke',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
               
            } 
          })
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Login Berhasil',
            text: msg,
            confirmButtonText: 'Oke',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                location.href = "http://localhost/admin/login.html";
            } 
          })
    }
  }
  
  //search transaksi
  $('#searchtransaksi').on( 'keyup', function () {
    var value = $(this).val();
  
    $(".tablesorter2 tbody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      
    });
  } );
  
  $(function(){
    $("#transaksitable").tablesorter({widgets: ['zebra']});
  });

  //search barang
  $('#searchbarang').on( 'keyup', function () {
    var value = $(this).val();
  
    $(".tablesorter tbody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      
    });
  } );
  
  $(function(){
    $("#barangtable").tablesorter({widgets: ['zebra']});
  });

function del(){
    if (confirm("Anda yakin ingin menghapus?")) {
        Swal.fire({
            icon: 'success',
            title: 'Berhasil',
            text: 'Data berhasil di hapus'
          })
    }
    return false;
}

function validasiuser(){
 
  $('#errornama').remove();
  $('#errortgllhr').remove();
  $('#erroremail').remove();
  $('#errorrole').remove();


  nama = $('#nama').val();
  tgllhr = $('#tgllhr').val();
  email = $('#email').val();
  role = $('#role').val();
  
  
  
  if(nama == ''){
      $('#nama').after('<span class="text-danger" id="errornama"> Nama harus diisi</span>');

      if(tgllhr == ''){
          $("#tgllhr").after('<span class="text-danger" id="errortgllhr">tanggal Lahir harus diisi</span>');
      }
      if(email == ''){
       $("#email").after('<span class="text-danger" id="erroremail">Email harus diisi</span>');

      }
      if(role == ''){
          $("#role").after('<span class="text-danger" id="errorrole">Role harus diisi</span>');

      }
  }else{
      if(tgllhr == ''){
          $("#tgllhr").after('<span class="text-danger" id="errortgllhr">Tanggal Lahir harus diisi</span>');
          if(email == ''){
           $("#email").after('<span class="text-danger" id="erroremail">Email harus diisi</span>');

          }
          if(role == ''){
              $("#role").after('<span class="text-danger" id="errorrole">Role harus diisi</span>');

          }
          
      }else{
          if(email == ''){
           $("#email").after('<span class="text-danger" id="erroremail">Email harus diisi</span>');

              if(role == ''){
                  $("#role").after('<span class="text-danger" id="errorrole">Role harus diisi</span>');

              }
          }else{
              if(role == ''){
                  $("#role").after('<span class="text-danger" id="errorrole">Role harus diisi</span>');

              }else{
                      Swal.fire({
                          icon: 'success',
                          title: 'Berhasil',
                          text: 'Data berhasil disimpan',
                          confirmButtonText: 'Oke',
                        }).then((result) => {
                          /* Read more about isConfirmed, isDenied below */
                          if (result.isConfirmed) {
                              location.href = "http://localhost/admin/user.html";
                          } 
                        })
              }
          }
      }
  }
}


function validasibarang(){
 
    $('#errornama').remove();
    $('#errorkat').remove();
    $('#errorjumlah').remove();
    $('#errorharga').remove();
    $('#errorfoto').remove();


    namabarang = $('#namabarang').val();
    kategori = $('#kategori').val();
    jumlah = $('#jumlah').val();
    harga = $('#harga').val();
    foto = $('#foto').val();
    
    
    
    if(namabarang == ''){
        $('#namabarang').after('<span class="text-danger" id="errornama"> Nama barang harus diisi</span>');

        if(kategori == ''){
            $("#kategori").after('<span class="text-danger" id="errorkat">Kategori harus diisi</span>');
        }
        if(jumlah == ''){
         $("#jumlah").after('<span class="text-danger" id="errorjumlah">Jumlah harus diisi</span>');

        }
        if(harga == ''){
            $("#harga").after('<span class="text-danger" id="errorharga">Harga harus diisi</span>');

        }
        if(foto == ''){
         $("#foto").after('<span class="text-danger" id="errorfoto">Foto harus diisi</span>');

        }
    }else{
        if(kategori == ''){
            $("#kategori").after('<span class="text-danger" id="errorkat">kategori harus diisi</span>');
            if(jumlah == ''){
             $("#jumlah").after('<span class="text-danger" id="errorjumlah">jumlah harus diisi</span>');

            }
            if(harga == ''){
                $("#harga").after('<span class="text-danger" id="errorharga">harga harus diisi</span>');

            }
            if(foto == ''){
             $("#foto").after('<span class="text-danger" id="errorfoto">foto harus diisi</span>');

            }
        }else{
            if(jumlah == ''){
             $("#jumlah").after('<span class="text-danger" id="errorjumlah">jumlah harus diisi</span>');

                if(harga == ''){
                    $("#harga").after('<span class="text-danger" id="errorharga">harga harus diisi</span>');

                }
                if(foto == ''){
                 $("#foto").after('<span class="text-danger" id="errorfoto">foto harus diisi</span>');

                }
            }else{
                if(harga == ''){
                    $("#harga").after('<span class="text-danger" id="errorharga">harga harus diisi</span>');

                    if(foto == ''){
                     $("#foto").after('<span class="text-danger" id="errorfoto">foto harus diisi</span>');

                    }
                }else{
                    if(foto == ''){
                     $("#foto").after('<span class="text-danger" id="errorfoto">foto harus diisi</span>');
                    }else{
                        Swal.fire({
                            icon: 'success',
                            title: 'Berhasil',
                            text: 'Data berhasil disimpan',
                            confirmButtonText: 'Oke',
                          }).then((result) => {
                            /* Read more about isConfirmed, isDenied below */
                            if (result.isConfirmed) {
                                location.href = "http://localhost/admin/barang.html";
                            } 
                          })

                
                    }
                }
            }
        }
    }
}

function validasitransaksi(){
 
    $('#errortgl').remove();
    $('#errorbarang').remove();
    $('#errorjmlh').remove();
    $('#errortotal').remove();
    $('#errormetode').remove();
    $('#errorstts').remove();


    tanggal = $('#tanggal').val();
    barang = $('#barang').val();
    jumlah = $('#jumlahbarang').val();
    total = $('#total').val();
    metode = $('#metode').val();
    stts = $('#status').val();
    
    
    
    if(tanggal == ''){
        $('#tanggal').after('<span class="text-danger" id="errortgl"> Tanggal barang harus diisi</span>');

        if(barang == ''){
            $("#barang").after('<span class="text-danger" id="errorbarang">Barang harus diisi</span>');
        }
        if(jumlah == ''){
         $("#jumlahbarang").after('<span class="text-danger" id="errorjmlh">Jumlah harus diisi</span>');
        }
        if(total == ''){
            $("#total").after('<span class="text-danger" id="errortotal">Total harus diisi</span>');
        }
        if(metode == ''){
         $("#metode").after('<span class="text-danger" id="errormetode">Metode harus diisi</span>');
        }
        if(stts == ''){
         $("#status").after('<span class="text-danger" id="errorstts">stts harus diisi</span>');
        }
    }else{
        if(barang == ''){
            $("#barang").after('<span class="text-danger" id="errorbarang">Barang harus diisi</span>');
            if(jumlah == ''){
            $("#jumlahbarang").after('<span class="text-danger" id="errorjmlh">Jumlah harus diisi</span>');
            }
            if(total == ''){
                $("#total").after('<span class="text-danger" id="errortotal">Total harus diisi</span>');
            }
            if(metode == ''){
            $("#metode").after('<span class="text-danger" id="errormetode">Metode harus diisi</span>');
            }
            if(stts == ''){
            $("#status").after('<span class="text-danger" id="errorstts">stts harus diisi</span>');
            }
        }else{
            if(jumlah == ''){
                $("#jumlahbarang").after('<span class="text-danger" id="errorjmlh">Jumlah harus diisi</span>');
            if(total == ''){
                $("#total").after('<span class="text-danger" id="errortotal">Total harus diisi</span>');
            }
            if(metode == ''){
                $("#metode").after('<span class="text-danger" id="errormetode">Metode harus diisi</span>');
            }
            if(stts == ''){
                $("#status").after('<span class="text-danger" id="errorstts">status harus diisi</span>');
            }
            }else{
                if(total == ''){
                    $("#total").after('<span class="text-danger" id="errortotal">Total harus diisi</span>');
                if(metode == ''){
                    $("#metode").after('<span class="text-danger" id="errormetode">Metode harus diisi</span>');
                }
                if(stts == ''){
                    $("#status").after('<span class="text-danger" id="errorstts">status harus diisi</span>');
                }
                }else{
                    if(metode == ''){
                        $("#metode").after('<span class="text-danger" id="errormetode">Metode harus diisi</span>');
                    if(stts == ''){
                        $("#status").after('<span class="text-danger" id="errorstts">status harus diisi</span>');
                    }
                    }else{
                        if(stts == ''){
                            $("#status").after('<span class="text-danger" id="errorstts">status harus diisi</span>');
                        }else{
                            Swal.fire({
                                icon: 'success',
                                title: 'Berhasil',
                                text: 'Data berhasil disimpan',
                                confirmButtonText: 'Oke',
                              }).then((result) => {
                                /* Read more about isConfirmed, isDenied below */
                                if (result.isConfirmed) {
                                    location.href = "http://localhost/admin/transaksi.html";
                                } 
                              })
                        }
                    }
                }
            }
        }
    }
}

function validasieditbarang(){
 
  $('#errornama').remove();
  $('#errorkat').remove();
  $('#errorjumlah').remove();
  $('#errorharga').remove();
  $('#errorfoto').remove();


  namabarang = $('#enamabarang').val();
  kategori = $('#ekategori').val();
  jumlah = $('#ejumlah').val();
  harga = $('#eharga').val();
  foto = $('#efoto').val();
  
  
  
  if(namabarang == ''){
      $('#enamabarang').after('<span class="text-danger" id="errornama"> Nama barang harus diisi</span>');

      if(kategori == ''){
          $("#ekategori").after('<span class="text-danger" id="errorkat">Kategori harus diisi</span>');
      }
      if(jumlah == ''){
       $("#ejumlah").after('<span class="text-danger" id="errorjumlah">Jumlah harus diisi</span>');

      }
      if(harga == ''){
          $("#eharga").after('<span class="text-danger" id="errorharga">Harga harus diisi</span>');

      }
      if(foto == ''){
       $("#efoto").after('<span class="text-danger" id="errorfoto">Foto harus diisi</span>');

      }
  }else{
      if(kategori == ''){
          $("#ekategori").after('<span class="text-danger" id="errorkat">kategori harus diisi</span>');
          if(jumlah == ''){
           $("#ejumlah").after('<span class="text-danger" id="errorjumlah">jumlah harus diisi</span>');

          }
          if(harga == ''){
              $("#eharga").after('<span class="text-danger" id="errorharga">harga harus diisi</span>');

          }
          if(foto == ''){
           $("#efoto").after('<span class="text-danger" id="errorfoto">foto harus diisi</span>');

          }
      }else{
          if(jumlah == ''){
           $("#ejumlah").after('<span class="text-danger" id="errorjumlah">jumlah harus diisi</span>');

              if(harga == ''){
                  $("#eharga").after('<span class="text-danger" id="errorharga">harga harus diisi</span>');

              }
              if(foto == ''){
               $("#efoto").after('<span class="text-danger" id="errorfoto">foto harus diisi</span>');

              }
          }else{
              if(harga == ''){
                  $("#eharga").after('<span class="text-danger" id="errorharga">harga harus diisi</span>');

                  if(foto == ''){
                   $("#efoto").after('<span class="text-danger" id="errorfoto">foto harus diisi</span>');

                  }
              }else{
                  if(foto == ''){
                   $("#efoto").after('<span class="text-danger" id="errorfoto">foto harus diisi</span>');
                  }else{
                      Swal.fire({
                          icon: 'success',
                          title: 'Berhasil',
                          text: 'Data berhasil diedit',
                          confirmButtonText: 'Oke',
                        }).then((result) => {
                          /* Read more about isConfirmed, isDenied below */
                          if (result.isConfirmed) {
                              location.href = "http://localhost/admin/barang.html";
                          } 
                        })

              
                  }
              }
          }
      }
  }
}

function validasiedittransaksi(){
 
  $('#errortgl').remove();
  $('#errorbarang').remove();
  $('#errorjmlh').remove();
  $('#errortotal').remove();
  $('#errormetode').remove();
  $('#errorstts').remove();


  tanggal = $('#tanggal').val();
  barang = $('#barang').val();
  jumlah = $('#jumlahbarang').val();
  total = $('#total').val();
  metode = $('#metode').val();
  stts = $('#status').val();
  
  
  
  if(tanggal == ''){
      $('#tanggal').after('<span class="text-danger" id="errortgl"> Tanggal barang harus diisi</span>');

      if(barang == ''){
          $("#barang").after('<span class="text-danger" id="errorbarang">Barang harus diisi</span>');
      }
      if(jumlah == ''){
       $("#jumlahbarang").after('<span class="text-danger" id="errorjmlh">Jumlah harus diisi</span>');
      }
      if(total == ''){
          $("#total").after('<span class="text-danger" id="errortotal">Total harus diisi</span>');
      }
      if(metode == ''){
       $("#metode").after('<span class="text-danger" id="errormetode">Metode harus diisi</span>');
      }
      if(stts == ''){
       $("#status").after('<span class="text-danger" id="errorstts">stts harus diisi</span>');
      }
  }else{
      if(barang == ''){
          $("#barang").after('<span class="text-danger" id="errorbarang">Barang harus diisi</span>');
          if(jumlah == ''){
          $("#jumlahbarang").after('<span class="text-danger" id="errorjmlh">Jumlah harus diisi</span>');
          }
          if(total == ''){
              $("#total").after('<span class="text-danger" id="errortotal">Total harus diisi</span>');
          }
          if(metode == ''){
          $("#metode").after('<span class="text-danger" id="errormetode">Metode harus diisi</span>');
          }
          if(stts == ''){
          $("#status").after('<span class="text-danger" id="errorstts">stts harus diisi</span>');
          }
      }else{
          if(jumlah == ''){
              $("#jumlahbarang").after('<span class="text-danger" id="errorjmlh">Jumlah harus diisi</span>');
          if(total == ''){
              $("#total").after('<span class="text-danger" id="errortotal">Total harus diisi</span>');
          }
          if(metode == ''){
              $("#metode").after('<span class="text-danger" id="errormetode">Metode harus diisi</span>');
          }
          if(stts == ''){
              $("#status").after('<span class="text-danger" id="errorstts">status harus diisi</span>');
          }
          }else{
              if(total == ''){
                  $("#total").after('<span class="text-danger" id="errortotal">Total harus diisi</span>');
              if(metode == ''){
                  $("#metode").after('<span class="text-danger" id="errormetode">Metode harus diisi</span>');
              }
              if(stts == ''){
                  $("#status").after('<span class="text-danger" id="errorstts">status harus diisi</span>');
              }
              }else{
                  if(metode == ''){
                      $("#metode").after('<span class="text-danger" id="errormetode">Metode harus diisi</span>');
                  if(stts == ''){
                      $("#status").after('<span class="text-danger" id="errorstts">status harus diisi</span>');
                  }
                  }else{
                      if(stts == ''){
                          $("#status").after('<span class="text-danger" id="errorstts">status harus diisi</span>');
                      }else{
                          Swal.fire({
                              icon: 'success',
                              title: 'Berhasil',
                              text: 'Data berhasil diedit',
                              confirmButtonText: 'Oke',
                            }).then((result) => {
                              /* Read more about isConfirmed, isDenied below */
                              if (result.isConfirmed) {
                                  location.href = "http://localhost/admin/transaksi.html";
                              } 
                            })
                      }
                  }
              }
          }
      }
  }
}



(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.adminlte = {}, global.jQuery));
})(this, (function (exports, $) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);



  var NAME$5 = 'PushMenu';
  var DATA_KEY$5 = 'lte.pushmenu';
  var EVENT_KEY$2 = "." + DATA_KEY$5;
  var JQUERY_NO_CONFLICT$5 = $__default["default"].fn[NAME$5];
  var EVENT_COLLAPSED$1 = "collapsed" + EVENT_KEY$2;
  var EVENT_COLLAPSED_DONE = "collapsed-done" + EVENT_KEY$2;
  var EVENT_SHOWN = "shown" + EVENT_KEY$2;
  var SELECTOR_TOGGLE_BUTTON$1 = '[data-widget="pushmenu"]';
  var SELECTOR_BODY = 'body';
  var SELECTOR_OVERLAY = '#sidebar-overlay';
  var SELECTOR_WRAPPER = '.wrapper';
  var CLASS_NAME_COLLAPSED = 'sidebar-collapse';
  var CLASS_NAME_OPEN$3 = 'sidebar-open';
  var CLASS_NAME_IS_OPENING$1 = 'sidebar-is-opening';
  var CLASS_NAME_CLOSED = 'sidebar-closed';
  var Default$5 = {
    autoCollapseSize: 992,
    enableRemember: false,
    noTransitionAfterReload: true,
    animationSpeed: 300
  };
  /**
   * Class Definition
   * ====================================================
   */

  var PushMenu = /*#__PURE__*/function () {
    function PushMenu(element, options) {
      this._element = element;
      this._options = $__default["default"].extend({}, Default$5, options);

      if ($__default["default"](SELECTOR_OVERLAY).length === 0) {
        this._addOverlay();
      }

      this._init();
    } // Public


    var _proto = PushMenu.prototype;

    _proto.expand = function expand() {
      var $bodySelector = $__default["default"](SELECTOR_BODY);

      if (this._options.autoCollapseSize && $__default["default"](window).width() <= this._options.autoCollapseSize) {
        $bodySelector.addClass(CLASS_NAME_OPEN$3);
      }

      $bodySelector.addClass(CLASS_NAME_IS_OPENING$1).removeClass(CLASS_NAME_COLLAPSED + " " + CLASS_NAME_CLOSED).delay(50).queue(function () {
        $bodySelector.removeClass(CLASS_NAME_IS_OPENING$1);
        $__default["default"](this).dequeue();
      });

      if (this._options.enableRemember) {
        localStorage.setItem("remember" + EVENT_KEY$2, CLASS_NAME_OPEN$3);
      }

      $__default["default"](this._element).trigger($__default["default"].Event(EVENT_SHOWN));
    };

    _proto.collapse = function collapse() {
      var _this = this;

      var $bodySelector = $__default["default"](SELECTOR_BODY);

      if (this._options.autoCollapseSize && $__default["default"](window).width() <= this._options.autoCollapseSize) {
        $bodySelector.removeClass(CLASS_NAME_OPEN$3).addClass(CLASS_NAME_CLOSED);
      }

      $bodySelector.addClass(CLASS_NAME_COLLAPSED);

      if (this._options.enableRemember) {
        localStorage.setItem("remember" + EVENT_KEY$2, CLASS_NAME_COLLAPSED);
      }

      $__default["default"](this._element).trigger($__default["default"].Event(EVENT_COLLAPSED$1));
      setTimeout(function () {
        $__default["default"](_this._element).trigger($__default["default"].Event(EVENT_COLLAPSED_DONE));
      }, this._options.animationSpeed);
    };

    _proto.toggle = function toggle() {
      if ($__default["default"](SELECTOR_BODY).hasClass(CLASS_NAME_COLLAPSED)) {
        this.expand();
      } else {
        this.collapse();
      }
    };

    _proto.autoCollapse = function autoCollapse(resize) {
      if (resize === void 0) {
        resize = false;
      }

      if (!this._options.autoCollapseSize) {
        return;
      }

      var $bodySelector = $__default["default"](SELECTOR_BODY);

      if ($__default["default"](window).width() <= this._options.autoCollapseSize) {
        if (!$bodySelector.hasClass(CLASS_NAME_OPEN$3)) {
          this.collapse();
        }
      } else if (resize === true) {
        if ($bodySelector.hasClass(CLASS_NAME_OPEN$3)) {
          $bodySelector.removeClass(CLASS_NAME_OPEN$3);
        } else if ($bodySelector.hasClass(CLASS_NAME_CLOSED)) {
          this.expand();
        }
      }
    };

    _proto.remember = function remember() {
      if (!this._options.enableRemember) {
        return;
      }

      var $body = $__default["default"]('body');
      var toggleState = localStorage.getItem("remember" + EVENT_KEY$2);

      if (toggleState === CLASS_NAME_COLLAPSED) {
        if (this._options.noTransitionAfterReload) {
          $body.addClass('hold-transition').addClass(CLASS_NAME_COLLAPSED).delay(50).queue(function () {
            $__default["default"](this).removeClass('hold-transition');
            $__default["default"](this).dequeue();
          });
        } else {
          $body.addClass(CLASS_NAME_COLLAPSED);
        }
      } else if (this._options.noTransitionAfterReload) {
        $body.addClass('hold-transition').removeClass(CLASS_NAME_COLLAPSED).delay(50).queue(function () {
          $__default["default"](this).removeClass('hold-transition');
          $__default["default"](this).dequeue();
        });
      } else {
        $body.removeClass(CLASS_NAME_COLLAPSED);
      }
    } // Private
    ;

    _proto._init = function _init() {
      var _this2 = this;

      this.remember();
      this.autoCollapse();
      $__default["default"](window).resize(function () {
        _this2.autoCollapse(true);
      });
    };

    _proto._addOverlay = function _addOverlay() {
      var _this3 = this;

      var overlay = $__default["default"]('<div />', {
        id: 'sidebar-overlay'
      });
      overlay.on('click', function () {
        _this3.collapse();
      });
      $__default["default"](SELECTOR_WRAPPER).append(overlay);
    } // Static
    ;

    PushMenu._jQueryInterface = function _jQueryInterface(operation) {
      return this.each(function () {
        var data = $__default["default"](this).data(DATA_KEY$5);

        var _options = $__default["default"].extend({}, Default$5, $__default["default"](this).data());

        if (!data) {
          data = new PushMenu(this, _options);
          $__default["default"](this).data(DATA_KEY$5, data);
        }

        if (typeof operation === 'string' && /collapse|expand|toggle/.test(operation)) {
          data[operation]();
        }
      });
    };

    return PushMenu;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default["default"](document).on('click', SELECTOR_TOGGLE_BUTTON$1, function (event) {
    event.preventDefault();
    var button = event.currentTarget;

    if ($__default["default"](button).data('widget') !== 'pushmenu') {
      button = $__default["default"](button).closest(SELECTOR_TOGGLE_BUTTON$1);
    }

    PushMenu._jQueryInterface.call($__default["default"](button), 'toggle');
  });
  $__default["default"](window).on('load', function () {
    PushMenu._jQueryInterface.call($__default["default"](SELECTOR_TOGGLE_BUTTON$1));
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default["default"].fn[NAME$5] = PushMenu._jQueryInterface;
  $__default["default"].fn[NAME$5].Constructor = PushMenu;

  $__default["default"].fn[NAME$5].noConflict = function () {
    $__default["default"].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return PushMenu._jQueryInterface;
  };

  
}));

