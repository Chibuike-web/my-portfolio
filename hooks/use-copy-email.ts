"use client";

import { useState } from "react";

export function useCopyEmail() {
	const [copied, setCopied] = useState(false);

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText("chibuikemaduabuchi2023@gmail.com");
			setCopied(true);
			setTimeout(() => {
				setCopied(false);
			}, 2000);
		} catch {
			setCopied(false);
		}
	};

	return {
		copied,
		copyEmail,
	};
}
