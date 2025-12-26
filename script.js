const bind = (id, target) => {
    document.getElementById(id).oninput = e =>
        document.getElementById(target).innerText = e.target.value;
};

bind("name","rName");
bind("title","rTitle");
bind("contact","rContact");
bind("summary","rSummary");

document.getElementById("skills").oninput = e =>{
    const skills = e.target.value.split(",");
    const box = document.getElementById("rSkills");
    box.innerHTML="";
    skills.forEach(s=>{
        if(s.trim()){
            const span=document.createElement("span");
            span.innerText=s.trim();
            box.appendChild(span);
        }
    })
};

function addEdu(){
    const input=document.createElement("input");
    input.placeholder="Degree | University | Year";
    document.getElementById("eduInputs").appendChild(input);

    input.oninput=()=>{
        renderList("eduInputs","rEdu");
    }
}

function addExp(){
    const input=document.createElement("input");
    input.placeholder="Job Title | Company | Duration";
    document.getElementById("expInputs").appendChild(input);

    input.oninput=()=>{
        renderList("expInputs","rExp");
    }
}

function renderList(src, target){
    const s=document.getElementById(src).children;
    const t=document.getElementById(target);
    t.innerHTML="";
    [...s].forEach(i=>{
        if(i.value){
            const li=document.createElement("li");
            li.innerText=i.value;
            t.appendChild(li);
        }
    })
}
