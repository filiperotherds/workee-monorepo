import { AbilityBuilder } from "@casl/ability";
import { AppAbility } from "./index.js";
import { User } from "./models/user.js";
import { Role } from "./roles.js";

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>
) => void;

export const permissions: Record<Role, PermissionsByRole> = {
  ADMIN(user, { can, cannot }) {
    can("manage", "all")

    cannot("transfer_ownership", "Organization")
    can("transfer_ownership", "Organization", { ownerId: { $eq: user.id } })
  },
  MEMBER(user, { can }) {
    can("get", "User")
    can(["create", "get"], "Project")
    can(["update", "delete"], "Project", { ownerId: { $eq: user.id } })
  },
  BILLING(_, { }) { },
};
