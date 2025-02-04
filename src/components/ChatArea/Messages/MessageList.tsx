// import Reasonings from '@/components/common/Chat/Reasoning/Reasonings/Reasonings'
// import References from '@/components/common/Chat/References'
// import Icon from '@/components/ui/icon'
//   import DetailAction from '@/components/common/Chat/DetailAction'
import { usePlaygroundStore } from "@/stores/PlaygroundStore";

import type { PlaygroundChatMessage } from "@/types/playground";

import { AgentMessage, UserMessage } from "./Messages";
// import ChatBlankState from '../../../BlankStates/ChatBlankState'
// import Tooltip from '@/components/common/Tooltip'
// import Paragraph from '@/components/ui/typography/Paragraph'
// import { ToolComponent } from '@/components/common/Chat/Tools/ToolsContent'

interface MessageListProps {
  messages: PlaygroundChatMessage[];
}

interface MessageWrapperProps {
  message: PlaygroundChatMessage;
  isLastMessage: boolean;
}

const AgentMessageWrapper = ({
  message,
  isLastMessage,
}: MessageWrapperProps) => {
  const isStreaming = usePlaygroundStore((state) => state.isStreaming);
  const messageIsStreaming = isStreaming && isLastMessage;

  return (
    <div className="flex flex-col gap-y-9">
      <AgentMessage message={message} />
      {/* {!messageIsStreaming && message.content && (
        <DetailAction copy content={message.content} />
      )} */}
    </div>
  );
};

const MessageList = ({ messages }: MessageListProps) => {
  if (messages.length === 0) {
    return (
      <div className="flex flex-col text-center items-center text-md">
        <div className="max-w-md flex gap-y-6 flex-col">
          <p>
            This is an <span className="underline">open-source</span> an Agno
            Agent Chat, built with Next.js, Shadcn, and Tailwind CSS.
          </p>
          <p>
            You can learn more about Agent Playground{" "}
            <a
              className="underline"
              href="https://docs.agno.com/get-started/playground#agent-playground"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {messages.map((message, index) => {
        const key = `${message.role}-${message.created_at}-${index}`;
        const isLastMessage = index === messages.length - 1;

        if (message.role === "agent") {
          return (
            <AgentMessageWrapper
              key={key}
              message={message}
              isLastMessage={isLastMessage}
            />
          );
        }
        return <UserMessage key={key} message={message} />;
      })}
    </>
  );
};

export default MessageList;
