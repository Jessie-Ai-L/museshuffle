
let D = window.MUSE_DATA || {};
function pick(a){ return a[Math.floor(Math.random()*a.length)] }
function byId(id){ return document.getElementById(id) }
function val(id, fallback="Any"){ const el=byId(id); return el?el.value:fallback }
function copyResult(){
  const r=byId("result");
  navigator.clipboard.writeText(r.innerText.trim()).then(()=>{byId("copy-status").textContent="Copied.";setTimeout(()=>byId("copy-status").textContent="",1600)})
}
function generate(mode){
  const active=byId("result"); if(active){active.classList.remove("is-shuffling"); void active.offsetWidth; active.classList.add("is-shuffling");}
  let title="", body="", list=[];
  const genre=val("genre");
  const difficulty=val("difficulty");
  const context=val("context");
  const medium=val("medium");
  switch(mode){
    case "drawing_random":
      title = `${pick(D.subjects)} ${pick(D.actions)}`;
      body = `Draw ${title.toLowerCase()} ${pick(D.settings)}.`;
      break;
    case "drawing_prompt":
      title = "Your drawing prompt";
      list = [
        `Subject: ${pick(D.subjects)} ${pick(D.actions)}`,
        `Setting: ${pick(D.settings)}`,
        `Mood: ${pick(D.moods)}`,
        `Style: ${pick(D.styles)}`,
        `Constraint: ${pick(D.constraints)}`,
        `Difficulty: ${difficulty}`
      ];
      break;
    case "theme":
      title = pick(D.themes);
      body = context==="Any" ? `Use “${title}” as the central theme for your next creative project.` : `Use “${title}” as the central theme for your next ${context.toLowerCase()} project.`;
      break;
    case "drawing_idea":
      title = `Draw ${pick(D.subjects)} ${pick(D.settings)}`;
      list = [`Visual twist: ${pick(D.constraints)}`,`Mood: ${pick(D.moods)}`,`Difficulty: ${difficulty}`];
      break;
    case "character":
      title = pick(D.names);
      list = [
        `Role: ${pick(D.roles)}`,
        `Personality: ${pick(D.traits)}`,
        `Flaw: ${pick(D.flaws)}`,
        `Appearance cue: ${pick(D.styles)} influence; one memorable accessory`,
        `Goal: ${pick(D.roleplay_goals)}`,
        `Secret: ${pick(D.secrets)}`
      ];
      break;
    case "art_idea":
      title = `${medium==="Any"?pick(D.mediums):medium} piece: ${pick(D.themes)}`;
      list = [`Subject: ${pick(D.subjects)} ${pick(D.settings)}`,`Mood: ${pick(D.moods)}`,`Composition challenge: ${pick(D.constraints)}`];
      break;
    case "art_prompt":
      title = "Your art prompt";
      body = `Create a ${medium==="Any"?pick(D.mediums):medium} artwork of ${pick(D.subjects)} ${pick(D.settings)}. Make it feel ${pick(D.moods)}, use ${pick(D.styles)}, and ${pick(D.constraints)}.`;
      break;
    case "book":
      title = `${genre==="Any"?pick(D.genres):genre} book idea`;
      list = [
        `Protagonist: a ${pick(D.roles)} who is ${pick(D.traits)}`,
        `Premise: they discover that ${pick(D.secrets).toLowerCase()}`,
        `Conflict: they must ${pick(D.roleplay_goals)}`,
        `Stakes: ${pick(D.stakes)}`,
        `Twist: ${pick(D.twists)}`
      ];
      break;
    case "story":
      title = `${genre==="Any"?pick(D.genres):genre} story seed`;
      body = `A ${pick(D.roles)} ${pick(D.settings)} is forced to ${pick(D.roleplay_goals)} after discovering that ${pick(D.secrets).toLowerCase()}. ${pick(D.twists)}.`;
      break;
    case "roleplay":
      title = "Roleplay scenario";
      list = [
        `Setting: ${pick(D.roleplay_settings)}`,
        `Role A: a ${pick(D.roles)} who is ${pick(D.traits)}`,
        `Role B: a ${pick(D.roles)} who ${pick(D.flaws)}`,
        `Objective: ${pick(D.roleplay_goals)}`,
        `Tension: ${pick(D.secrets)}`,
        `Opening line: ${pick(D.opening_lines)}`
      ];
      break;
  }
  const r=byId("result");
  r.innerHTML = `<div class="meta">Freshly shuffled</div><h3>${title}</h3>${body?`<p>${body}</p>`:""}${list.length?`<ul>${list.map(x=>`<li>${x}</li>`).join("")}</ul>`:""}`;
}
document.addEventListener("DOMContentLoaded",()=>{
  const mode=document.body.dataset.mode;
  if(mode){
    fetch("/assets/data.json").then(r=>r.json()).then(d=>{window.MUSE_DATA=d;D=d;generate(mode)}).catch(()=>{byId("result").innerHTML="<p>Could not load generator data. Please refresh.</p>"});
    byId("shuffle").addEventListener("click",()=>generate(mode));
    byId("copy").addEventListener("click",copyResult);
  }
});
