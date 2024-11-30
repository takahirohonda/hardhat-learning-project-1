export const hasSigners = async (): Promise<boolean> => {
  const metamask = window.ethereum
  const signers = await (metamask.request({
    method: 'eth_accounts',
  }) as Promise<string[]>)
  return signers.length > 0
}

export const requestAccess = async (): Promise<boolean> => {
  const result = (await window.ethereum.request({
    method: 'eth_requestAccounts',
  })) as string[]
  return result && result.length > 0
}
