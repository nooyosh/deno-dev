addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("今日金曜日でしょ！", {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/plain; charset=utf-8",
      },
    })
  );
});
