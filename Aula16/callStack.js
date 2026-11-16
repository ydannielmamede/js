function a() {
  b();
}

function b() {
  c();
}

function c() {
  throw new Error("Algo deu errado");
}

a();