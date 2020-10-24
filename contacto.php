<!DOCTYPE html>
<html lang="es" dir="ltr">
  <!-- Import head.php -->
  <?php include('head.php'); ?>

  <body>
    <!--Import header.php-->
    <?php include('header.php'); ?>

    <main>
      <section id="formulario" class="formulario">
        <div class="container">
          <div class="row">
            <div class="col s12">
              <div class="card blue-grey z-depth-5">
                <div class="card-content white-text center">
                  <span class="card-title">Contactanos</span>
                  <p>Puedes contactarte con nosotros por diversos medios, estaremos complacidos de atenderte:</p>
                </div>
                <div class="card-action">
                  <div class="row">
                    <div class="card-action row">
                      <form class="col s12 m6" role="form" method="post" action="sender.php">
                        <div class="row">
                          <div class="input-field col s12">
                            <input id="fname" name="fname" type="text" class="validate" required= "required">
                            <label class=" white-text">Nombre Completo</label>
                          </div>
                          <div class="input-field col s12">
                            <input id="email" name="email" type="email" class="validate" required= "required">
                            <label data-error="wrong" data-success="right" class=" white-text">Correo electrónico</label>
                          </div>
                          <div class="input-field col s12">
                            <input id="subj" name="subj" type="text" class="validate" required= "required">
                            <label class=" white-text">Asunto</label>
                          </div>
                          <div class="input-field col s12">
                            <textarea id="mssg" name="mssg" class="materialize-textarea validate" data-length="120" required= "required"></textarea>
                            <label class=" white-text">Mensaje</label>
                          </div>
                          <button class="btn waves-effect waves-light red lighten-1" type="submit" id="send">Enviar
                            <i class="material-icons right">send</i>
                          </button>
                        </div>
                      </form>
                      <div id="result-message" role="alert"></div>
                      <div class="col m1 hide-on-small-and-down"></div>
                      <div class="col s12 m4">
                        <div class="row">
                          <ul>
                            <!-- <li><p class="white-text contacto2"><strong> <i class="material-icons tiny">phone</i> Telefóno: </strong><a href="tel: +504 22815651">(504) 2281-5651</a></p></li>
                            <li><p class="white-text contacto2"><strong> <i class="material-icons tiny">phone_android</i> Celular: </strong><a href="tel: +504 32522185">(504) 3252-2185</a></p></li> -->
                            <li><p class="white-text contacto2"><strong> <i class="material-icons tiny">email</i> Correo: </strong><a href="mailto:info@margo.hn?subject=Solicitud de información">info@margo.hn</a></p></li>
                            <li><p class="white-text contacto2">
                              <a href="https://www.linkedin.com/company/margohn/"><i class="fa fa-linkedin-square" style="font-size:26px"></i></a>
                              <a href="https://www.facebook.com/MARGOSdeRL/"><i class="fa fa-facebook-square" style="font-size:26px"></i></a>
                              <a href="https://twitter.com/MARGOSdeRL"><i class="fa fa-twitter-square" style="font-size:26px"></i></a></p></li>
                            <li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </section>    
    </main>

    <!--Import footer.php-->
    <?php include('footer.php'); ?>

  </body>
</html>
