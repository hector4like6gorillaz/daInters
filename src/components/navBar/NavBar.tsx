import React, { Fragment } from "react";
import style from "../../modules/iconsModule/icons.module.css";
import { useNavigate } from "react-router-dom";
import { capitalizarPrimeraLetra } from "../../utilities/text-utilities";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/16/solid";
import {
  AcademicCapIcon,
  BookOpenIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

interface IPartesCorrecto {
  name: string;
  Icon: any;
  url: string;
}
const partesDeMiSitioCorrecto: IPartesCorrecto[] = [
  { name: "Home", Icon: HomeIcon, url: "/" },
  { name: "Libros", Icon: BookOpenIcon, url: "libros" },
  { name: "pagos", Icon: CurrencyDollarIcon, url: "pagos" },
  { name: "uniformes", Icon: AcademicCapIcon, url: "uni" },
  { name: "usuarios", Icon: UserIcon, url: "usuarios" },
  { name: "panel", Icon: ClipboardDocumentCheckIcon, url: "panel" },
];
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className={`${style["nav-bar-top"]}`}>
      <div className={`${style["container-icon-menu"]}`}>
        <div className={`${style["soy-un-logo"]}`}></div>
        <div className={`${style["modules-names-container"]}`}>
          {partesDeMiSitioCorrecto !== null &&
            partesDeMiSitioCorrecto.map(
              (item: IPartesCorrecto, index: number) => {
                const { Icon } = item;
                return (
                  <Fragment key={index}>
                    <p
                      onClick={() => {
                        //console.log(item);
                        navigate(item.url);
                      }}
                      className={`${style["p-titles-sites"]}`}
                    >
                      <Icon className={`${style["icon-menu"]}`} />{" "}
                      {capitalizarPrimeraLetra(item.name)}
                    </p>
                  </Fragment>
                );
              }
            )}
        </div>
      </div>
      <div className={`${style["soy-las-otras-opciones"]}`}>
        <input placeholder="buscar" />
        <button>
          <MagnifyingGlassCircleIcon className={`${style["icon-menu"]}`} />{" "}
        </button>
        <div className={`${style["avatar-img-div"]}`}></div>
      </div>
    </div>
  );
};

export default NavBar;
