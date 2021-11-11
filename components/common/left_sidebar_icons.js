import styles from "../../styles/commonComponents.module.css";

export default function leftSidebarIcons(props) {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div
        style={props.style}
        className={`${styles.box} d-flex align-items-center justify-content-center`}
      >
        {props.children}
      </div>
      <div className={styles.box_2} style={props.style}></div>
    </div>
  );
}
