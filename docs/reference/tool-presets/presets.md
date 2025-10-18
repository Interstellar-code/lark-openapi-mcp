# Preset Tool Collections Reference

This document provides detailed information about all preset tool collections available in lark-mcp. Presets are predefined sets of tools that can be enabled together for specific use cases.

## Overview

If you have no special requirements, you can keep the default preset to use common functions. When you need fine control or want to understand the complete list, please refer to the preset table below.

## How to Use Presets

To use a preset, specify it in the `-t` parameter:

```json
{
  "mcpServers": {
    "lark-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@larksuiteoapi/lark-mcp",
        "mcp",
        "-a", "<your_app_id>",
        "-s", "<your_app_secret>",
        "-t", "preset.light"
      ]
    }
  }
}
```

You can also combine presets with individual tools:

```json
{
  "mcpServers": {
    "lark-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@larksuiteoapi/lark-mcp",
        "mcp",
        "-a", "<your_app_id>",
        "-s", "<your_app_secret>",
        "-t", "preset.light,im.v1.message.create"
      ]
    }
  }
}
```

## Preset Tool Collections

| Tool Name | Function Description | preset.light | preset.default (Default) | preset.im.default | preset.base.default | preset.base.batch | preset.doc.default | preset.task.default | preset.task.full | preset.calendar.default |
| --- | --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| im.v1.chat.create | Create a group chat | | ✓ | ✓ | | | | | | |
| im.v1.chat.list | Get group chat list | | ✓ | ✓ | | | | | | |
| im.v1.chat.search | Search group chats | ✓ | | | | | | | | |
| im.v1.chatMembers.get | Get group members | | ✓ | ✓ | | | | | | |
| im.v1.message.create | Send messages | ✓ | ✓ | ✓ | | | | | | |
| im.v1.message.list | Get message list | ✓ | ✓ | ✓ | | | | | | |
| bitable.v1.app.create | Create base | | ✓ | | ✓ | ✓ | | | | |
| bitable.v1.appTable.create | Create base data table | | ✓ | | ✓ | ✓ | | | | |
| bitable.v1.appTable.list | Get base data table list | | ✓ | | ✓ | ✓ | | | | |
| bitable.v1.appTableField.list | Get base data table field list | | ✓ | | ✓ | ✓ | | | | |
| bitable.v1.appTableRecord.search | Search base data table records | ✓ | ✓ | | ✓ | ✓ | | | | |
| bitable.v1.appTableRecord.create | Create base data table records | | ✓ | | ✓ | | | | | |
| bitable.v1.appTableRecord.batchCreate | Batch create base data table records | ✓ | | | | ✓ | | | | |
| bitable.v1.appTableRecord.update | Update base data table records | | ✓ | | ✓ | | | | | |
| bitable.v1.appTableRecord.batchUpdate | Batch update base data table records | | | | | ✓ | | | | |
| docx.v1.document.rawContent | Get document content | ✓ | ✓ | | | | ✓ | | | |
| docx.builtin.import | Import documents | ✓ | ✓ | | | | ✓ | | | |
| docx.builtin.search | Search documents | ✓ | ✓ | | | | ✓ | | | |
| drive.v1.permissionMember.create | Add collaborator permissions | | ✓ | | | | ✓ | | | |
| wiki.v2.space.getNode | Get Wiki node | ✓ | ✓ | | | | ✓ | | | |
| wiki.v1.node.search | Search Wiki nodes | | ✓ | | | | ✓ | | | |
| contact.v3.user.batchGetId | Batch get user IDs | ✓ | ✓ | | | | | | | |
| task.v2.attachment.delete | Delete attachment | | | | | | | | ✓ | |
| task.v2.attachment.get | Get attachment details | | | | | | | | ✓ | |
| task.v2.attachment.list | List attachments | | | | | | | | ✓ | |
| task.v2.comment.create | Create comment | | | | | | | | ✓ | |
| task.v2.comment.delete | Delete comment | | | | | | | | ✓ | |
| task.v2.comment.get | Get comment details | | | | | | | | ✓ | |
| task.v2.comment.list | List comments | | | | | | | | ✓ | |
| task.v2.comment.patch | Update comment | | | | | | | | ✓ | |
| task.v2.customField.add | Add custom field to resource | | | | | | | | ✓ | |
| task.v2.customField.create | Create custom field | | | | | | | | ✓ | |
| task.v2.customField.get | Get custom field details | | | | | | | | ✓ | |
| task.v2.customField.list | List custom fields | | | | | | | | ✓ | |
| task.v2.customField.patch | Update custom field | | | | | | | | ✓ | |
| task.v2.customField.remove | Remove custom field from resource | | | | | | | | ✓ | |
| task.v2.customFieldOption.create | Create custom field option | | | | | | | | ✓ | |
| task.v2.customFieldOption.patch | Update custom field option | | | | | | | | ✓ | |
| task.v2.section.create | Create section | | | | | | | | ✓ | |
| task.v2.section.delete | Delete section | | | | | | | | ✓ | |
| task.v2.section.get | Get section details | | | | | | | | ✓ | |
| task.v2.section.list | List sections | | | | | | | | ✓ | |
| task.v2.section.patch | Update section | | | | | | | | ✓ | |
| task.v2.section.tasks | Get tasks in section | | | | | | | | ✓ | |
| task.v2.task.addDependencies | Add task dependencies | | | | | | | | ✓ | |
| task.v2.task.addMembers | Add task members | | | | | | | ✓ | ✓ | |
| task.v2.task.addReminders | Add task reminders | | | | | | | ✓ | ✓ | |
| task.v2.task.addTasklist | Add task to tasklist | | | | | | | | ✓ | |
| task.v2.task.create | Create task | | | | | | | ✓ | ✓ | |
| task.v2.task.delete | Delete task | | | | | | | ✓ | ✓ | |
| task.v2.task.get | Get task details | | | | | | | ✓ | ✓ | |
| task.v2.task.list | List tasks | | | | | | | ✓ | ✓ | |
| task.v2.task.patch | Modify task | | | | | | | ✓ | ✓ | |
| task.v2.task.removeDependencies | Remove task dependencies | | | | | | | | ✓ | |
| task.v2.task.removeMembers | Remove task members | | | | | | | | ✓ | |
| task.v2.task.removeReminders | Remove task reminders | | | | | | | | ✓ | |
| task.v2.task.removeTasklist | Remove task from tasklist | | | | | | | | ✓ | |
| task.v2.task.tasklists | List tasklists of task | | | | | | | | ✓ | |
| task.v2.taskSubtask.create | Create subtask | | | | | | | ✓ | ✓ | |
| task.v2.taskSubtask.list | List subtasks | | | | | | | ✓ | ✓ | |
| task.v2.tasklist.addMembers | Add tasklist members | | | | | | | | ✓ | |
| task.v2.tasklist.create | Create tasklist | | | | | | | | ✓ | |
| task.v2.tasklist.delete | Delete tasklist | | | | | | | | ✓ | |
| task.v2.tasklist.get | Get tasklist details | | | | | | | | ✓ | |
| task.v2.tasklist.list | List tasklists | | | | | | | | ✓ | |
| task.v2.tasklist.patch | Update tasklist | | | | | | | | ✓ | |
| task.v2.tasklist.removeMembers | Remove tasklist members | | | | | | | | ✓ | |
| task.v2.tasklist.tasks | Get tasks in tasklist | | | | | | | | ✓ | |
| task.v2.tasklistActivitySubscription.create | Create activity subscription | | | | | | | | ✓ | |
| task.v2.tasklistActivitySubscription.delete | Delete activity subscription | | | | | | | | ✓ | |
| task.v2.tasklistActivitySubscription.get | Get activity subscription details | | | | | | | | ✓ | |
| task.v2.tasklistActivitySubscription.list | List activity subscriptions | | | | | | | | ✓ | |
| task.v2.tasklistActivitySubscription.patch | Update activity subscription | | | | | | | | ✓ | |
| calendar.v4.calendarEvent.create | Create calendar event | | | | | | | | | ✓ |
| calendar.v4.calendarEvent.patch | Modify calendar event | | | | | | | | | ✓ |
| calendar.v4.calendarEvent.get | Get calendar event | | | | | | | | | ✓ |
| calendar.v4.freebusy.list | Query free/busy status | | | | | | | | | ✓ |
| calendar.v4.calendar.primary | Get primary calendar | | | | | | | | | ✓ |

> **Note**: In the table, "✓" indicates the tool is included in that preset. Using `-t preset.xxx` will enable tools marked with "✓" in the corresponding column.

## Preset Descriptions

### preset.light
A minimal preset that includes only the most essential tools for basic messaging and document operations. Ideal for lightweight integrations.

### preset.default (Default)
The default preset that includes commonly used tools across messaging, documents, databases, and collaboration. Recommended for most users.

### preset.im.default
Focused on instant messaging functionality, including chat creation, member management, and message handling.

### preset.base.default
Includes basic database operations with BitTable (multi-dimensional tables) for data management scenarios.

### preset.base.batch
Specialized for batch operations on BitTable data, useful for bulk data processing.

### preset.doc.default
Document-focused preset including document reading, importing, searching, and collaboration features.

### preset.task.default
Comprehensive task management preset with full CRUD operations (create, read, update, delete) for tasks and subtasks. Includes support for hierarchical task structures, task members, and reminders. Contains 9 essential task management tools.

### preset.task.full
Complete task management preset with all 51 taskV2 API endpoints. Includes everything in `preset.task.default` plus:
- **Attachment Management**: Upload, download, and manage task attachments
- **Comment System**: Create, read, update, and delete task comments
- **Custom Fields**: Create and manage custom fields for tasks (number, date, member, single/multi-select, text)
- **Section Management**: Organize tasks into sections/groups within tasklists
- **Task Dependencies**: Set up prev/next dependencies between tasks for Gantt chart views
- **Tasklist Management**: Full CRUD operations for tasklists (projects)
- **Activity Subscriptions**: Subscribe to task/tasklist events and receive notifications

Ideal for advanced task management scenarios, project management tools, and comprehensive workflow automation.

### preset.calendar.default
Calendar management preset for creating, modifying events, and querying availability.

## Related Documentation

- [Main Documentation](../../../README.md)
- [Tools Reference](./tools-en.md)
- [Configuration Guide](../../usage/configuration/configuration.md)
- [Command Line Reference](../cli/cli.md)
