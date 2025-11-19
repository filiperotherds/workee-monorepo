import { defineAbilityFor } from "@repo/auth"

const ability = defineAbilityFor({ role: "MEMBER", id: "1234" })

// const userCanInviteSomeoneElse = ability.can("invite", "User")
const userCanDeleteSomeoneElse = ability.can("delete", "User")

const userCannotDeleteOtherUser = ability.cannot("delete", "User")

// console.log(userCanInviteSomeoneElse)
console.log(userCanDeleteSomeoneElse)
console.log(userCannotDeleteOtherUser)