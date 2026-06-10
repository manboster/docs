# Introducing Gatekeeper

> [!NOTE]
> Some of the content is modified by Gemini 3.1 Pro, and if there are problems with this content, we will apperaite if you  [open a new pull request](https://github.com/manboster/docs/pull/new) to edit it in our repository.

## What is Gatekeeper in Manboster?

Gatekeeper is a mandatory, built-in security module within Manboster. Operating on a configurable Zero Trust architecture by default, it acts as a secure intermediary for system operations. While you can customize its security policies at any time, the Gatekeeper module itself is deeply integrated into the system and cannot be disabled.

## Execution Flow

When the system processes tool call requests, Gatekeeper enforces a strict validation and authorization pipeline:

1. The system receives a response message from the cloud LLM. If it contains a tool call request, it is immediately routed to the Gatekeeper module.
2. Gatekeeper validates the requested parameters against the defined tool declaration.
3. Gatekeeper evaluates the user's access level. If the user does not meet the tool's minimum permission requirements, the request is automatically rejected.
4. If permissions are sufficient, Gatekeeper checks the authorization cache to see if the user has previously approved this action.
5. If no cached approval exists, Gatekeeper surfaces a decision form to the user.
6. The authorization form is valid for **10 minutes**. If the user takes no action within this window, the tool call is automatically rejected.
7. The user can choose from the following actions:
- **Approve:** Approve all tool calls for the next 10 minutes, or approve this specific tool for 30–120 minutes (depending on the tool's security tier).
- **Delegate to Hachimi:** Assign the Hachimi safety module to handle this single request, or allow it to automatically handle all requests for the next hour. If Hachimi deems a request safe, it will proceed automatically.
- **Reject:** Reject this specific tool for 15 minutes, or block all tool calls for the remainder of the current session.

8. If approved, the process continues. If manually denied by the user, the system aborts the operation and returns a "User manually denied" error.

> [!NOTE]
> Blocking tool calls in the current session applies only to that specific session; other active chats remain completely unaffected.
