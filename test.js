// * Dung JS manipulation DOM -> Ve DOM Tree -> Duyet DOM tree de tim the co id="title"
// * -> cap nhat text node cho h1 Element

const h1Element = document.getElementById("title");

// Side Effect ->
// * Tao ra website -> DOM tree -> Tao ra vitual DOM -> side effect task job (fetch API) ->
// * -> Su dung state de kich hoat co che render cua React -> diffing (so sanh Vitural DOM mới và Vitual DOM cũ -> Cập nhật chỗ thay đổi trên DOM.)

// * -> Component đang đóng góp vào xây dựng giao diện thì là component được mount (ở trong vitual DOM)
// * -> Component đang không đóng góp vào xây dựng giao diện thì là component đang unmount (không ở trong vitual DOM)
