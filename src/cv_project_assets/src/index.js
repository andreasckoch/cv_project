import { cv_project } from "../../declarations/cv_project";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with cv_project actor, calling the greet method
  const greeting = await cv_project.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
