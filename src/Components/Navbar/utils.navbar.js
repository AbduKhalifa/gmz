import styles from "./nav.module.css";


export function handleActivePage({ target }) {
    let indexItem;
    const PC_List_Items = document.querySelectorAll(`.${styles.PC} ul li`);
    const TABLET_List_Items = document.querySelectorAll(`.${styles.TABLET} ul li`);

    PC_List_Items.forEach((element, i) => {
        element.classList.remove(styles.active)
        if (target.closest("li") == element)
            indexItem = i
    });
    TABLET_List_Items.forEach((element, i) => {
        element.classList.remove(styles.active)
        if (target.closest("li") == element)
            indexItem = i
    });

    PC_List_Items[indexItem].classList.add(styles.active);
    TABLET_List_Items[indexItem].classList.add(styles.active);
    return
}