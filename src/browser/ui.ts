function createButton(
  callback: Function,
  info: { img: string; background: string; left: number; bottom: number,id:string }
) {
  const img = document.createElement("img");
  img.src = info.img;
  img.width = 32;
  img.height = 32;
  img.id = info.id;

  const div = document.createElement("div");
  div.style.cssText = `    display: flex;
    align-items: center;
    position: fixed;
    justify-content: center;
    left: ${info.left}px;
    bottom: ${info.bottom}px;
    width: 50px;
    height: 50px;
    z-index: 999999;
    background-color: ${info.background};
    border-radius: 50%;`;
  div.appendChild(img);
  div.onclick = function (e) {    
    callback(e);
  };
  return div;
}

export default function (callback: Function) {
  if (document) {
    document.body.appendChild(
      createButton(callback, {
        background: "#2b85e4",
        img: "data:image/svg+xml;base64,PHN2ZyB0PSIxNjIzMTQ1NjMyNjUxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDEiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PHBhdGggZD0iTTI5MC4xMzMzMzMgMjkwLjEzMzMzM2gtODUuMzMzMzMzYTUxLjIgNTEuMiAwIDAgMC01MS4yIDUxLjJ2NDQzLjczMzMzNGE1MS4yIDUxLjIgMCAwIDAgNTEuMiA1MS4yaDYxNC40YTUxLjIgNTEuMiAwIDAgMCA1MS4yLTUxLjJWMzQxLjMzMzMzM2E1MS4yIDUxLjIgMCAwIDAtNTEuMi01MS4yaC04NS4zMzMzMzNhNTEuMiA1MS4yIDAgMCAxLTQ4LjU3MTczNC0zNS4wMDM3MzNsLTEwLjgwMzItMzIuMzkyNTMzQTUxLjIgNTEuMiAwIDAgMCA2MjUuOTIgMTg3LjczMzMzM2gtMjI3Ljg0YTUxLjIgNTEuMiAwIDAgMC00OC41NzE3MzMgMzUuMDAzNzM0bC0xMC44MDMyIDMyLjM5MjUzM0E1MS4yIDUxLjIgMCAwIDEgMjkwLjEzMzMzMyAyOTAuMTMzMzMzeiBtMC01MS4ybDEwLjc4NjEzNC0zMi4zNzU0NjZBMTAyLjQgMTAyLjQgMCAwIDEgMzk4LjA4IDEzNi41MzMzMzNoMjI3Ljg0YTEwMi40IDEwMi40IDAgMCAxIDk3LjE2MDUzMyA3MC4wMjQ1MzRMNzMzLjg2NjY2NyAyMzguOTMzMzMzaDg1LjMzMzMzM2ExMDIuNCAxMDIuNCAwIDAgMSAxMDIuNCAxMDIuNHY0NDMuNzMzMzM0YTEwMi40IDEwMi40IDAgMCAxLTEwMi40IDEwMi40SDIwNC44YTEwMi40IDEwMi40IDAgMCAxLTEwMi40LTEwMi40VjM0MS4zMzMzMzNhMTAyLjQgMTAyLjQgMCAwIDEgMTAyLjQtMTAyLjRoODUuMzMzMzMzeiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMjI0MiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNzI1LjMzMzMzM2MtOTguOTY5NiAwLTE3OS4yLTgwLjIzMDQtMTc5LjItMTc5LjJTNDEzLjAzMDQgMzY2LjkzMzMzMyA1MTIgMzY2LjkzMzMzMyA2OTEuMiA0NDcuMTYzNzMzIDY5MS4yIDU0Ni4xMzMzMzMgNjEwLjk2OTYgNzI1LjMzMzMzMyA1MTIgNzI1LjMzMzMzM3ogbTAtNTEuMmExMjggMTI4IDAgMSAwIDAtMjU2IDEyOCAxMjggMCAwIDAgMCAyNTZ6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIyMjQzIj48L3BhdGg+PC9zdmc+",
        left: 10,
        bottom: 110,
        id:'e2e-test-by-screenshot-btn'
      })
    );
  }
}

export function save(callback: Function) {
  document.body.appendChild(
    createButton(callback, {
      background: "#19be6b",
      img: "data:image/svg+xml;base64,PHN2ZyB0PSIxNjIzMzkyOTEzNTY4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1MDkiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PHBhdGggZD0iTTgxNi43Mzk5OTQgOTE0LjAwNDEzOCAyMDcuMjU4NzU1IDkxNC4wMDQxMzhDMTU5LjMzMDAyNCA5MTQuMDA0MTM4IDEyMC4zMzk5NjEgODc0Ljk4NDg4NCAxMjAuMzM5OTYxIDgyNy4wMjQ1MjhMMTIwLjMzOTk2MSAxOTcuNTMzNzU5YzAtNDcuOTY1MjIxIDM4Ljk5MDA2My04Ni45ODMyNTkgODYuOTE4Nzk1LTg2Ljk4MzI1OWw2MDkuNDgyNDU1IDBjNDcuOTI4NzMyIDAgODYuOTE4Nzk1IDM5LjAxODAzOCA4Ni45MTg3OTUgODYuOTgzMjU5bDAgNjI5LjQ4NzEyMUM5MDMuNjU4Nzg5IDg3NC45ODQ4ODQgODY0LjY2OTk0MiA5MTQuMDA0MTM4IDgxNi43Mzk5OTQgOTE0LjAwNDEzOEw4MTYuNzM5OTk0IDkxNC4wMDQxMzh6TTE5Ny43OTQ2NCAxNTguMTI4OTM0Yy0xNi40NzI0OTkgMC0yOS44NzYyNDUgMTMuNDAyNTMtMjkuODc2MjQ1IDI5Ljg3NTAyOWwwIDY0OC41NDU0OTZjMCAxNi40NzI0OTkgMTMuNDAzNzQ2IDI5Ljg3NjI0NSAyOS44NzYyNDUgMjkuODc2MjQ1bDYyOC40MDk0NjkgMGMxNi40NzI0OTkgMCAyOS44NzYyNDUtMTMuNDAzNzQ2IDI5Ljg3NjI0NS0yOS44NzYyNDVMODU2LjA4MDM1NSAxODguMDAzOTYzYzAtMTYuNDcyNDk5LTEzLjQwMzc0Ni0yOS44NzUwMjktMjkuODc2MjQ1LTI5Ljg3NTAyOUwxOTcuNzk0NjQgMTU4LjEyODkzNCAxOTcuNzk0NjQgMTU4LjEyODkzNHpNMTk3Ljc5NDY0IDE1OC4xMjg5MzQiIHAtaWQ9IjI1MTAiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNzU3LjA1OTI2NiA0NjMuMTU2NjAyIDI2Ni45MzgyNjcgNDYzLjE1NjYwMiAyNjYuOTM4MjY3IDE0OS41MDA0MjRsMjkuODcxMzggMCAwIDI4My43ODQ3OTggNDMwLjM3OTQ1NiAwTDcyNy4xODkxMDMgMTQ5LjUwMDQyNGwyOS44NzAxNjQgMEw3NTcuMDU5MjY2IDQ2My4xNTY2MDJ6TTc1Ny4wNTkyNjYgNDYzLjE1NjYwMiIgcC1pZD0iMjUxMSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik02NzAuNzYzMjIzIDM4OC40Nzc1NDVsLTg3LjQwMjg4NiAwTDU4My4zNjAzMzYgMjM5LjExODIxM2w4Ny40MDI4ODYgMEw2NzAuNzYzMjIzIDM4OC40Nzc1NDUgNjcwLjc2MzIyMyAzODguNDc3NTQ1ek02MTMuMjMwNSAzNTguNjA2MTY1bDI3LjY2MjU1OSAwIDAtODkuNjE3Nzg5LTI3LjY2MjU1OSAwTDYxMy4yMzA1IDM1OC42MDYxNjUgNjEzLjIzMDUgMzU4LjYwNjE2NXpNNjEzLjIzMDUgMzU4LjYwNjE2NSIgcC1pZD0iMjUxMiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==",
      left: 10,
      bottom: 30,
      id:'e2e-test-by-screenshot-export-btn'
    })
  );
}

export function toast(msg: string) {}
