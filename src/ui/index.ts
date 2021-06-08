function createButton(callback: Function) {
  const img = document.createElement("img");
  img.src =
    "data:image/svg+xml;base64,PHN2ZyB0PSIxNjIzMTQ1NjMyNjUxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDEiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PHBhdGggZD0iTTI5MC4xMzMzMzMgMjkwLjEzMzMzM2gtODUuMzMzMzMzYTUxLjIgNTEuMiAwIDAgMC01MS4yIDUxLjJ2NDQzLjczMzMzNGE1MS4yIDUxLjIgMCAwIDAgNTEuMiA1MS4yaDYxNC40YTUxLjIgNTEuMiAwIDAgMCA1MS4yLTUxLjJWMzQxLjMzMzMzM2E1MS4yIDUxLjIgMCAwIDAtNTEuMi01MS4yaC04NS4zMzMzMzNhNTEuMiA1MS4yIDAgMCAxLTQ4LjU3MTczNC0zNS4wMDM3MzNsLTEwLjgwMzItMzIuMzkyNTMzQTUxLjIgNTEuMiAwIDAgMCA2MjUuOTIgMTg3LjczMzMzM2gtMjI3Ljg0YTUxLjIgNTEuMiAwIDAgMC00OC41NzE3MzMgMzUuMDAzNzM0bC0xMC44MDMyIDMyLjM5MjUzM0E1MS4yIDUxLjIgMCAwIDEgMjkwLjEzMzMzMyAyOTAuMTMzMzMzeiBtMC01MS4ybDEwLjc4NjEzNC0zMi4zNzU0NjZBMTAyLjQgMTAyLjQgMCAwIDEgMzk4LjA4IDEzNi41MzMzMzNoMjI3Ljg0YTEwMi40IDEwMi40IDAgMCAxIDk3LjE2MDUzMyA3MC4wMjQ1MzRMNzMzLjg2NjY2NyAyMzguOTMzMzMzaDg1LjMzMzMzM2ExMDIuNCAxMDIuNCAwIDAgMSAxMDIuNCAxMDIuNHY0NDMuNzMzMzM0YTEwMi40IDEwMi40IDAgMCAxLTEwMi40IDEwMi40SDIwNC44YTEwMi40IDEwMi40IDAgMCAxLTEwMi40LTEwMi40VjM0MS4zMzMzMzNhMTAyLjQgMTAyLjQgMCAwIDEgMTAyLjQtMTAyLjRoODUuMzMzMzMzeiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMjI0MiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNzI1LjMzMzMzM2MtOTguOTY5NiAwLTE3OS4yLTgwLjIzMDQtMTc5LjItMTc5LjJTNDEzLjAzMDQgMzY2LjkzMzMzMyA1MTIgMzY2LjkzMzMzMyA2OTEuMiA0NDcuMTYzNzMzIDY5MS4yIDU0Ni4xMzMzMzMgNjEwLjk2OTYgNzI1LjMzMzMzMyA1MTIgNzI1LjMzMzMzM3ogbTAtNTEuMmExMjggMTI4IDAgMSAwIDAtMjU2IDEyOCAxMjggMCAwIDAgMCAyNTZ6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIyMjQzIj48L3BhdGg+PC9zdmc+";
  img.width = 32;
  img.height = 32;
  const div = document.createElement("div");
  div.style.cssText = `    display: flex;
    align-items: center;
    position: fixed;
    justify-content: center;
    left: 10px;
    bottom: 30px;
    width: 50px;
    height: 50px;
    z-index: 999999;
    background-color: #ed4014;
    border-radius: 50%;`;
  div.appendChild(img);
  div.onclick = function (e) {
    callback.call(this, e);
  };
  return div;
}

export default function (callback: Function) {
  if (document) {
    document.body.appendChild(createButton(callback));
  }
}

export function toast(msg:string){
    
}