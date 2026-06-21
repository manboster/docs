# Gatekeeper 简介

> [!NOTE]
> 此翻译部分内容由 Kimi K2.6 和 Gemini 3.1 Pro 提供，如果有任何疏忽和遗漏，欢迎[向我们提交PR](https://github.com/manboster/docs/pull/new)进行修改！

## Manboster 中的 Gatekeeper 是什么？

Gatekeeper 是 Manboster 中一个 **强制启用、内置的安全模块** 。它默认基于可配置的**零信任架构**运行，作为系统操作的安全中间层。虽然你可以随时自定义其安全策略，但 Gatekeeper 模块本身已深度集成到系统中，**无法被禁用**。 Operating on a configurable Zero Trust architecture by default, it acts as a secure intermediary for system operations. While you can customize its security policies at any time, the Gatekeeper module itself is deeply integrated into the system and cannot be disabled.

## 执行流程

当系统处理工具调用请求时，Gatekeeper 会执行严格的验证与授权流程：

1. The system receives a response message from the cloud LLM. If it contains a tool call request, it is immediately routed to the Gatekeeper module.
2. Gatekeeper 根据已定义的工具声明，验证请求参数。
3. Gatekeeper 评估用户的访问权限级别。如果用户未达到该工具的最低权限要求，请求将被自动拒绝。 If the user does not meet the tool's minimum permission requirements, the request is automatically rejected.
4. 如果权限充足，Gatekeeper 会检查授权缓存，查看用户此前是否已批准过该操作。
5. If no cached approval exists, Gatekeeper surfaces a decision form to the user.
6. 授权表单的有效期为 **10 分钟**。如果用户在此期间未采取任何操作，该工具调用将被自动拒绝。 If the user takes no action within this window, the tool call is automatically rejected.
7. 用户可选择以下操作：

- **批准（Approve）：** 批准接下来 10 分钟内的所有工具调用，或批准该特定工具 30–120 分钟（具体时长取决于工具的安全等级）。
- **委托给 Hachimi（Delegate to Hachimi）：** 交由 Hachimi 安全模块处理这一次请求，或允许它在接下来一小时内自动处理所有请求。如果 Hachimi 判定请求安全，将自动执行。 If Hachimi deems a request safe, it will proceed automatically.
- **拒绝（Reject）：** 拒绝该特定工具 15 分钟，或在当前会话期间屏蔽所有工具调用。

8. If approved, the process continues. 如果获得批准，流程将继续执行。如果用户手动拒绝，系统将中止操作并返回"用户手动拒绝"错误。

> [!NOTE]
> 在当前会话中屏蔽工具调用**仅作用于该特定会话**；其他活跃的聊天会话完全不受影响。
