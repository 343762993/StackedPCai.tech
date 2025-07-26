async function fetchPCBuildEntities() {
  const response = await fetch("https://app.base44.com/api/apps/68839b4e5e6b9cb14916da5d/entities/PCBuild", {
    headers: {
      'api_key': '8eGAW89DG3Lu0rJHfuEuHsCA8fQ0Ag',
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  document.getElementById("result").textContent = JSON.stringify(data, null, 2);
}

window.onload = fetchPCBuildEntities;
