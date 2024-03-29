"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image'

const TipTap = ({ onChange, content }: any) => {
    const handleChange = (newContent: string) => {
        onChange(newContent);
    };
    const editor = useEditor({
        extensions: [StarterKit, Underline, Image],
        editorProps: {
            attributes: {
                class:
                    "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none",
            },
        },
        onUpdate: ({ editor }) => {
            handleChange(editor.getHTML());
        },
    });

    return (
        <div className="w-full">
            <Toolbar editor={editor} content={content} />
            <EditorContent editor={editor} />
        </div>
    );
};

export default TipTap;