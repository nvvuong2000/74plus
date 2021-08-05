using System;

namespace RookieOnlineAssetManagement.Interfaces
{
    public interface ICurrentUserServices
    {
        Guid UserId { get; }
    }
}
