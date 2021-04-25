ker="replace with your kerberos id"
pw="replace with your password"

document.getElementById("username").value = ker;
document.getElementById("password").value = pw;

form = document.getElementById("login").innerHTML;
line_start = form.search("Please");
line_end = line_start + form.substring(line_start).search("=");
line = form.substring(line_start, line_end);

answer = -1;
add = line.search("add");
subtract = line.search("subtract");
first = line.search("first");
v = line.match(/[0-9]*/g).filter(function(s){return s != ""});
x = parseInt(v[0]);
y = parseInt(v[1]);
if(add > 0) answer = x+y;
else if(subtract > 0) answer = x-y;
else if(first > 0) answer = x;
else answer = y;
document.getElementById("valuepkg3").value = answer;
document.getElementById("loginbtn").click();
