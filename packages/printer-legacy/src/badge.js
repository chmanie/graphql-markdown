const {
  object: { hasProperty },
  graphql: { isNonNullType, isListType, getNamedType },
} = require("@graphql-markdown/utils");

const { getLinkCategory } = require("./link");
const { getGroup } = require("./group");

const getTypeBadges = (type) => {
  const rootType = hasProperty(type, "type") ? type.type : type;

  const badges = [];

  if (hasProperty(type, "isDeprecated") && type.isDeprecated) {
    badges.push("deprecated");
  }

  if (isNonNullType(rootType)) {
    badges.push("non-null");
  }

  if (isListType(rootType)) {
    badges.push("list");
  }

  const category = getLinkCategory(getNamedType(rootType));
  if (typeof category !== "undefined") {
    badges.push(category);
  }

  const group = getGroup(rootType);
  if (typeof group !== "undefined" && group !== "") {
    badges.push(group);
  }

  return badges;
};

const printBadges = (type, options) => {
  if (!hasProperty(options, "typeBadges") || options.typeBadges !== true) {
    return "";
  }

  const badges = getTypeBadges(type);

  if (badges.length === 0) {
    return "";
  }

  return badges
    .map(
      (badge) =>
        `<Badge class="secondary" text="${
          hasProperty(badge, "singular") ? badge.singular : badge
        }"/>`,
    )
    .join(" ");
};

module.exports = {
  printBadges,
  getTypeBadges,
};