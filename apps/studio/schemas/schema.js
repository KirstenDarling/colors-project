// First, we must import the schema creator// Then import schema types from any plugins that might expose them

// We import object and document schemas
import blockContent from "./blockContent";
import bill from "./bill";
import crewMember from "./crewMember";
import castMember from "./castMember";
import debt from "./debt";
import debtCollector from "./debtCollector";
import movie from "./movie";
import person from "./person";
import screening from "./screening";
import activity from "./activity";
import color from "./color";
import firstPaycheck from "./firstPaycheck";
import monthlyBudget from "./monthlyBudget";
import goal from "./goal";
import spell from "./spell";
import personalHoliday from "./personalHoliday";
import plotSummary from "./plotSummary";
import plotSummaries from "./plotSummaries";
import neighborhood from "./neighborhood";
import balance from "./balance";
import archerUtilities from "./archerUtilities";

// Then we give our schema to the builder and provide the result to Sanity
export default [
  // We name our schema
  // name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  // types: schemaTypes.concat([
  // The following are document types which will appear
  // in the studio.
  archerUtilities,
  movie,
  person,
  neighborhood,
  screening,
  activity,
  balance,
  bill,
  color,
  debt,
  debtCollector,
  firstPaycheck,
  monthlyBudget,
  goal,
  spell,
  personalHoliday,
  // When added to this list, object types can be used as
  // { type: 'typename' } in other document schemas
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
];
