import {
    gm,
    manager,
    moderator,
    beast,
    elite,
    member,
    guildStaff,
    guildRole,
    defaultMember,
    verifyTick
} from "config/roles"
const roles = [
    gm,
    manager,
    moderator,
    beast,
    elite,
    member,
    guildStaff,
    guildRole
]

type RoleType =
    | "gm"
    | "manager"
    | "moderator"
    | "beast"
    | "elite"
    | "member"
    | "default"
    | "all"

export default function roleManage(role: RoleType): { rolesToRemove: string[], rolesToAdd: string[] } {
    if (role === "gm") {
        const rolesToRemove = roles.filter(role => role !== gm && role !== guildStaff && role !== guildRole)
        const rolesToAdd = [gm, guildStaff, guildRole, verifyTick]
        return { rolesToRemove, rolesToAdd }
    }

    if (role === "manager") {
        const rolesToRemove = roles.filter(role => role !== manager && role !== guildStaff && role !== guildRole)
        const rolesToAdd = [manager, guildStaff, guildRole, verifyTick]
        return { rolesToRemove, rolesToAdd }
    }

    if (role === "moderator") {
        const rolesToRemove = roles.filter(role => role !== moderator && role !== guildStaff && role !== guildRole)
        const rolesToAdd = [moderator, guildStaff, guildRole, verifyTick]
        return { rolesToRemove, rolesToAdd }
    }

    if (role === "beast") {
        const rolesToRemove = roles.filter(role => role !== beast && role !== guildRole)
        const rolesToAdd = [beast, guildRole, verifyTick]
        return { rolesToRemove, rolesToAdd }
    }

    if (role === "elite") {
        const rolesToRemove = roles.filter(role => role !== elite && role !== guildRole)
        const rolesToAdd = [elite, guildRole, verifyTick]
        return { rolesToRemove, rolesToAdd }
    }

    if (role === "member") {
        const rolesToRemove = roles.filter(role => role !== member && role !== guildRole)
        const rolesToAdd = [member, guildRole, verifyTick]
        return { rolesToRemove, rolesToAdd }
    }

    if (role === "default") {
        const rolesToRemove = roles
        const rolesToAdd = [defaultMember, verifyTick]
        return { rolesToRemove, rolesToAdd }
    }

    if (role === "all") {
        const rolesToRemove = roles
        rolesToRemove.push(verifyTick)
        rolesToRemove.push(defaultMember)

        return { rolesToRemove, rolesToAdd: [] }
    }

    return { rolesToRemove: [], rolesToAdd: [] }
}
