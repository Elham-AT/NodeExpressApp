const users = `<html>
<body>
   
   <form action = "/process_post" method = "POST">
      Name: <input type = "text" name = "name"> <br>
      Email: <input type = "text" name = "email">
      <input type = "submit" value = "Submit">
   </form>
   
</body>
</html>`;
  
module.exports = users;