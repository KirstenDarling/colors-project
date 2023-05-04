// Structure Builder Reference LINK: https://www.sanity.io/docs/structure-builder-reference
import S from "@sanity/desk-tool/structure-builder";
// import { AiFillVideoCamera, AiOutlineUsergroupAdd } from "react-icons/ai";
// import { FiEdit, FiGlobe, FiHome, FiSettings } from "react-icons/fi";
// import { GiFarmTractor } from "react-icons/gi";
import { MdTrendingUp, MdDirectionsBike, MdBook } from "react-icons/md";
// import { RiPlantFill, RiRouteFill } from "react-icons/ri";
// import Iframe from "sanity-plugin-iframe-pane";
// import {
//   defaultDocumentNodeTypes,
//   filteredDocuments,
//   singleton,
// } from "../helpers";
// import resolveProductionUrl from "../parts/resolveProductionUrl";
// import SEOPreview from "../views/SEOPreview";
// import productsListItem from "./products";

// export const getDefaultDocumentNode = ({ schemaType }) => {
//   if (defaultDocumentNodeTypes.includes(schemaType)) {
//     return S.document().views([
//       S.view.form(),
//       S.view
//         .component(Iframe)
//         .title("Web Preview")
//         .icon(MdWeb)
//         .options({
//           url: (doc) => resolveProductionUrl(doc),
//         }),
//       S.view.component(SEOPreview).title("SEO Preview").icon(FiGlobe),
//     ]);
//   }
// };

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Activities App")
        .icon(MdDirectionsBike)
        .child(
          S.list()
            .title("Activities App")
            .items([
              S.documentTypeListItem("activity").title("Activities"),
              // .icon(FiEdit),
              S.documentTypeListItem("neighborhood").title("Neighborhoods"),
              // .icon(FiEdit),
            ])
        ),
      // S.documentTypeListItem("activity").title("Activities"),
      S.divider(),
      S.listItem()
        .title("Budget App")
        .icon(MdTrendingUp)
        .child(
          S.list()
            .title("Budget App")
            .items([
              S.documentTypeListItem("firstPaycheck").title(
                "Paycheck on the 5th"
              ),
              S.documentTypeListItem("secondPaycheck").title(
                "Paycheck on the 20th"
              ),
              S.divider(),
              S.documentTypeListItem("monthlyBudget").title("Monthly Budgets"),
              S.divider(),
              S.documentTypeListItem("annualBudget").title("Annual Budgets"),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Book of Shadows App")
        .icon(MdBook)
        .child(
          S.list()
            .title("Book of Shadows App")
            .items([
              S.documentTypeListItem("spell").title("Spells"),
              // .icon(FiEdit),
              S.documentTypeListItem("personalHoliday").title(
                "Personal Holidays"
              ),
              // .icon(FiEdit),
              S.documentTypeListItem("goal").title(
                "Goals, Intentions, Manifestations"
              ),
            ])
        ),
      S.divider(),
      S.documentTypeListItem("color").title("Color App"),
      S.divider(),
      // S.documentTypeListItem("person").title("People"),
      // S.documentTypeListItem("organization").title("Organizations"),
      // S.documentTypeListItem("place").title("Places"),
      // S.documentTypeListItem("dealer").title("Dealers"),
      // S.documentTypeListItem("category").title("Categories"),
      // S.divider(),
      // S.documentTypeListItem("comment").title("Comments"),
      // ...S.documentTypeListItems().filter(filteredDocuments),
    ]);
