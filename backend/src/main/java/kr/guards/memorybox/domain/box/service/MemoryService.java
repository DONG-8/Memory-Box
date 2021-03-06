package kr.guards.memorybox.domain.box.service;

import kr.guards.memorybox.domain.box.request.AllMemoriesPostReq;

public interface MemoryService {
    int boxCreateUserFrame(String boxId, Long userSeq);
    boolean saveAllMemories(AllMemoriesPostReq allMemoriesPostReq, String boxId, Long userSeq);
}
