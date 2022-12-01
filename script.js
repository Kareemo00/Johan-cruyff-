< !DOCTYPE html >
  <html lang="en">
    <head>
      <!--bootstrap CSS-->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

        <!--my CSS-->
        <link rel="stylesheet" href="mystyle.css">

          <!--bootstrap JS-->
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

          <title>Js Website</title>



          <style>
            p {
              background - color:antiquewhite;
        }
          </style>

          <script>
            function hello()
            {
              let heading = prompt("Change the heading");

            document.getElementById('heading').innerHTML = heading

        }
            function bye()
            {
            var erm = document.getElementById('erm').style.fontSize='35px';
        }
            function gone()
            {
            var alone = document.getElementById('alone').style.display='none'
        }
            function suprise()
            {
            var hi = document.getElementById('hi').style.display='block'
        }
            function we()
            {
              document.getElementById('myImage').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Feyenoord_tegen_Ajax_1-0._Nummer_26_Israel_in_duel_met_Cruyff.jpg/440px-Feyenoord_tegen_Ajax_1-0._Nummer_26_Israel_in_duel_met_Cruyff.jpg"
            }
            function johan()
            {
            var name = document.getElementById("textfield").value
            document.getElementById("ye").innerHTML = "Hello, " + name + ". You're really cool.";
            ye.innerHTML= "Hello, " + textbox.value + ". You're really cool.";
        }
          </script>
        </head>
        <body>
          <h1 id=heading style="background-color:blue">Js Website</h1><button type="button" class="btn btn-primary" onclick="hello();">Change Heading</button>

          <p id="erm">This is a paragraph.</p>
          <button onclick="bye()" type="button" class="btn btn-primary">Change the size</button>
          <p id="alone"> This is another intresting paragraph</p>
          <button onclick="gone()" type="button" class="btn btn-primary">Remove this intresting paragraph</button>
          <p id="hi" style="display:none"> SUPRISEEEEE</p>
          <button onclick="suprise()" type="button" class="btn btn-primary">It will make something apear</button>
          <img id="myImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Johan_Cruyff_1974c.jpg/500px-Johan_Cruyff_1974c.jpg">
          <button onclick="we()" type ="button" class ="btn btn-primary">Change the Imgage</button>
          <p id="ye">Hello</p>
          <button onclick="johan()" type ="button" class ="btn btn-primary">Greet</button>
          <p>Name: <input id="textfield" type ="text"><a href="#" id="doit" onclick="johan();"></a></p>
        </body>
      </html>