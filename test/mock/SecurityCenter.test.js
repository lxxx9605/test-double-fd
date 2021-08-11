import DoorPanel from "../../src/mock/DoorPanel";
import SecurityCenter from "../../src/mock/SecurityCenter";
jest.mock("../../src/mock/DoorPanel");

describe('security center test', () => {
    /* 需求描述：
    编写SecurityCenter类的单元测试，单元测试switchOn方法，不依赖于DoorPanel的close的方法实现
    * */
    const doorPanel = new DoorPanel();
    doorPanel.close.mockImplementation(() => "Door is closed");
    test('should verify door is closed', () => {
        new SecurityCenter(doorPanel).switchOn()
        expect(doorPanel.close).toBeCalled();
    });
});