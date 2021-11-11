import { useRouter } from "next/router";
import Link from "next/link";

//imported bootstrap components
import { InputGroup, FormControl, Nav } from "react-bootstrap";

//imported styles
import style from "../../styles/commonComponents.module.css";

export default function Header() {
  const router = useRouter();

  return (
    <div className={style.header}>
      <div className="d-flex justify-content-between">
        <div>
          <h3>Jaegar Resto</h3>
          <p>Tuesday, 2 Feb 2021</p>
        </div>
        <div className="w-50">
          <InputGroup className="mb-2  p-2">
            <InputGroup.Text className={style.input_groups}>
              <SearchIcon />
            </InputGroup.Text>
            <FormControl
              className={style.form_control}
              id="inlineFormInputGroup"
              placeholder="Search for food, cofee etc..."
            />
          </InputGroup>
        </div>
      </div>

      <Nav>
        {router.pathname == "/" ? (
          <Link href="/" passHref>
            <Nav.Link className={style.active_link}>
              Cold Dishes
              <hr className={style.active_border} />
            </Nav.Link>
          </Link>
        ) : (
          <Link href="/" passHref>
            <Nav.Link style={{ paddingLeft: "0px" }}>Cold Dishes</Nav.Link>
          </Link>
        )}

        {router.pathname == "/soap" ? (
          <Link href="/soap" passHref>
            <Nav.Link className={style.active_link}>
              Soap
              <hr className={style.active_border} />
            </Nav.Link>
          </Link>
        ) : (
          <Link href="/soap" passHref>
            <Nav.Link>Soap</Nav.Link>
          </Link>
        )}

        {router.pathname == "/grill" ? (
          <Link href="/grill" passHref>
            <Nav.Link className={style.active_link}>
              Grill
              <hr className={style.active_border} />
            </Nav.Link>
          </Link>
        ) : (
          <Link href="/grill" passHref>
            <Nav.Link>Grill</Nav.Link>
          </Link>
        )}

        {router.pathname == "/appetizer" ? (
          <Link href="/appetizer" passHref>
            <Nav.Link className={style.active_link}>
              Appetizer
              <hr className={style.active_border} />
            </Nav.Link>
          </Link>
        ) : (
          <Link href="/appetizer" passHref>
            <Nav.Link>Appetizer</Nav.Link>
          </Link>
        )}

        {router.pathname == "/dessert" ? (
          <Link href="/soap" passHref>
            <Nav.Link className={style.active_link}>
              Dessert
              <hr className={style.active_border} />
            </Nav.Link>
          </Link>
        ) : (
          <Link href="/dessert" passHref>
            <Nav.Link>Dessert</Nav.Link>
          </Link>
        )}
      </Nav>

      <hr
        style={{
          width: "100%",
          backgroundColor: "#FAFAFA",
          marginTop: "9px",
        }}
      />
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
  );
}
