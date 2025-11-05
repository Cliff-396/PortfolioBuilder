// Generates a polished, responsive HTML string with fancy CSS animations
const buildPortfolioHTML = (formData) => {
  if (!formData) return "<p>Error: No form data provided.</p>";

  const safe = (s) =>
    s ? String(s).replaceAll("<", "&lt;").replaceAll(">", "&gt;") : "";

  const name = safe(formData.name) || "Your Name";
  const title = safe(formData.title) || "Your Title";
  const bio = safe(formData.bio) || "Short bio about yourself...";
  const skills = safe(formData.skills).split("\n").filter(Boolean);
  const projects = safe(formData.projects).split("\n").filter(Boolean);
  const contact = safe(formData.contact) || "email@example.com";

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  ${
    formData.profileImage
      ? `
  <div class="profile-img-container">
    <img src="${formData.profileImage}" alt="Profile Image" class="profile-img" />
  </div>
`
      : ""
  }

  <title>${name} — Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap" rel="stylesheet">
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:'Poppins',sans-serif;background:linear-gradient(135deg,#1a1a2e,#16213e);color:#fff;min-height:100vh;padding:40px;overflow-x:hidden}
    .container{max-width:1000px;margin:auto;background:rgba(255,255,255,0.05);border-radius:20px;padding:40px;box-shadow:0 8px 30px rgba(0,0,0,0.4);backdrop-filter:blur(10px);animation:fadeIn 1s ease-in}
    @keyframes fadeIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
    header{text-align:center;margin-bottom:40px}
    header h1{font-size:2.8rem;background:linear-gradient(90deg,#00c6ff,#0072ff);-webkit-background-clip:text;color:transparent;animation:shine 3s infinite linear}
    @keyframes shine{0%{background-position:-200px}100%{background-position:200px}}
    header h2{font-size:1.4rem;color:#ccc;margin-top:8px}
    .bio{margin:20px auto;padding:20px;background:rgba(255,255,255,0.08);border-radius:12px;line-height:1.7;text-align:center}
    .skills,.projects{margin:30px 0}
    h3{font-size:1.5rem;margin-bottom:15px;text-align:center;color:#00c6ff;text-shadow:0 0 5px #00c6ff}
    .skills-list{display:flex;flex-wrap:wrap;justify-content:center;gap:10px}
    .skill{background:linear-gradient(90deg,#0072ff,#00c6ff);padding:10px 18px;border-radius:30px;color:#fff;font-weight:600;transition:transform 0.3s}
    .skill:hover{transform:scale(1.1)}
    .project-card{background:rgba(255,255,255,0.05);border-radius:12px;padding:20px;margin:10px 0;box-shadow:0 4px 10px rgba(0,0,0,0.2);transition:transform 0.3s,box-shadow 0.3s}
    .project-card:hover{transform:translateY(-5px) scale(1.02);box-shadow:0 8px 20px rgba(0,0,0,0.3)}
    .contact{text-align:center;margin-top:40px}
    .contact a{background:linear-gradient(90deg,#00c6ff,#0072ff);color:white;padding:12px 25px;border-radius:25px;text-decoration:none;font-weight:700;transition:background 0.4s}
    .contact a:hover{background:linear-gradient(90deg,#0072ff,#00c6ff)}
    footer{text-align:center;color:#ccc;margin-top:40px;font-size:0.9rem}
    @media(max-width:700px){header h1{font-size:2rem}.container{padding:20px}}
    .profile-img-container {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
   }

  .profile-img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #007bff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
  
</style>
</head>
<body>
  <div class="container">
    <header>
      <h1>${name}</h1>
      <h2>${title}</h2>
    </header>
    <div class="bio">${bio.replace(/\n/g, "<br>")}</div>
    <section class="skills">
      <h3>Skills</h3>
      <div class="skills-list">
        ${skills.map((s) => `<div class='skill'>${s}</div>`).join("")}
      </div>
    </section>
    <section class="projects">
      <h3>Projects</h3>
      ${projects
        .map(
          (p) =>
            `<div class='project-card'><strong>${
              p.split("|")[0]
            }</strong><br>${(p.split("|")[1] || "").trim()}</div>`
        )
        .join("")}
    </section>
    <div class="contact"><a href="mailto:${contact}">Contact Me</a></div>
    <footer>✨ Built with love using Portfolio Builder ✨</footer>
  </div>
</body>
</html>`;
};

export default buildPortfolioHTML;
